import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { LessonCard, type LessonStatus } from '@/components/LessonCard';
import { getLessonsByLanguage } from '@/data/lessons';
import { getUnitById } from '@/data/units';
import { posthog } from '@/lib/posthog';
import { useLanguageStore } from '@/store/useLanguageStore';
import { useProgressStore } from '@/store/useProgressStore';
import { colors } from '@/theme';

type LessonTab = 'lessons' | 'practice';

export default function Learn() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<LessonTab>('lessons');
  const [isSaved, setIsSaved] = useState(false);

  const selectedLanguage = useLanguageStore((state) => state.selectedLanguage);
  const completedLessonIds = useProgressStore(
    (state) => state.completedLessonIds,
  );

  if (!selectedLanguage) {
    return null;
  }

  const lessons = getLessonsByLanguage(selectedLanguage);
  const currentLesson =
    lessons.find((lesson) => !completedLessonIds.includes(lesson.id)) ??
    lessons[lessons.length - 1];

  if (!currentLesson) {
    return null;
  }

  const unit = getUnitById(currentLesson.unitId);
  const completedCount = lessons.filter((lesson) =>
    completedLessonIds.includes(lesson.id),
  ).length;

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: '#ffffff' }}
      edges={['top', 'left', 'right']}
    >
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View className="flex-row items-start justify-between px-5 pt-2">
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() =>
              router.canGoBack() ? router.back() : router.push('/(tabs)')
            }
            hitSlop={8}
            className="h-9 w-9 items-center justify-center"
          >
            <Ionicons
              name="chevron-back"
              size={26}
              color={colors.textPrimary}
            />
          </TouchableOpacity>

          <View className="flex-1 items-center px-2">
            <Text
              className="font-poppins-semibold text-h3 text-text-primary"
              numberOfLines={1}
            >
              {currentLesson.title}
            </Text>
            {unit ? (
              <Text className="mt-0.5 font-poppins-regular text-body-sm text-text-secondary">
                Unit {unit.order} • {completedCount}/{lessons.length} lessons
              </Text>
            ) : null}
          </View>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setIsSaved((prev) => !prev)}
            hitSlop={8}
            className="h-9 w-9 items-center justify-center"
          >
            <Ionicons
              name={isSaved ? 'bookmark' : 'bookmark-outline'}
              size={22}
              color={colors.linguaPurpleDeep}
            />
          </TouchableOpacity>
        </View>

        {/* Hero image */}
        <Image
          source={{ uri: currentLesson.imageUrl }}
          resizeMode="cover"
          className="mt-4 h-52 w-full bg-surface"
        />

        {/* Tabs */}
        <View
          className="-mt-6 mx-5 flex-row rounded-full bg-surface p-1"
          style={styles.tabBarShadow}
        >
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setActiveTab('lessons')}
            className={`flex-1 items-center rounded-full py-2.5 ${
              activeTab === 'lessons' ? 'bg-white' : ''
            }`}
            style={activeTab === 'lessons' ? styles.activePillShadow : undefined}
          >
            <Text
              className={`font-poppins-semibold text-body-md ${
                activeTab === 'lessons'
                  ? 'text-lingua-purple-deep'
                  : 'text-text-secondary'
              }`}
            >
              Lessons
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setActiveTab('practice')}
            className={`flex-1 items-center rounded-full py-2.5 ${
              activeTab === 'practice' ? 'bg-white' : ''
            }`}
            style={activeTab === 'practice' ? styles.activePillShadow : undefined}
          >
            <Text
              className={`font-poppins-semibold text-body-md ${
                activeTab === 'practice'
                  ? 'text-lingua-purple-deep'
                  : 'text-text-secondary'
              }`}
            >
              Practice
            </Text>
          </TouchableOpacity>
        </View>

        {/* Content */}
        {activeTab === 'lessons' ? (
          <View className="mt-5 px-5">
            {lessons.map((lesson, index) => {
              const isCompleted = completedLessonIds.includes(lesson.id);
              const status: LessonStatus = isCompleted
                ? 'completed'
                : lesson.id === currentLesson.id
                  ? 'active'
                  : 'locked';

              return (
                <LessonCard
                  key={lesson.id}
                  lesson={lesson}
                  order={index + 1}
                  status={status}
                  onPress={() => {
                    posthog?.capture('lesson_selected', {
                      language_code: selectedLanguage,
                      lesson_id: lesson.id,
                      lesson_status: status,
                    });
                    router.push({
                      pathname: '/lesson/[id]',
                      params: { id: lesson.id },
                    });
                  }}
                />
              );
            })}
          </View>
        ) : (
          <View className="mt-16 items-center px-8">
            <Ionicons
              name="barbell-outline"
              size={40}
              color={colors.textSecondary}
            />
            <Text className="mt-4 text-center font-poppins-semibold text-body-lg text-text-primary">
              Practice mode is coming soon
            </Text>
            <Text className="mt-1 text-center font-poppins-regular text-body-sm text-text-secondary">
              Review past lessons and sharpen your skills here.
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

// Shadow syntax differs between iOS and Android, so it lives outside NativeWind.
const styles = StyleSheet.create({
  tabBarShadow: {
    shadowColor: '#0D132B',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },
  activePillShadow: {
    shadowColor: '#0D132B',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
  },
});
