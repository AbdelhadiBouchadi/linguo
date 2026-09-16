import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { PrimaryButton } from '@/components/PrimaryButton';
import { getLessonById } from '@/data/lessons';
import { posthog } from '@/lib/posthog';
import { useProgressStore } from '@/store/useProgressStore';
import { colors } from '@/theme';
import type { ActivityType } from '@/types/learning';

const ACTIVITY_ICONS: Record<ActivityType, keyof typeof Ionicons.glyphMap> = {
  video: 'videocam',
  audio: 'headset',
  chat: 'chatbubble-ellipses',
  vocabulary: 'book',
};

export default function LessonDetail() {
  const router = useRouter();
  const params = useLocalSearchParams<{ id: string | string[] }>();
  const lessonId = Array.isArray(params.id) ? params.id[0] : params.id;

  const completedLessonIds = useProgressStore(
    (state) => state.completedLessonIds,
  );
  const completeLesson = useProgressStore((state) => state.completeLesson);

  const lesson = lessonId ? getLessonById(lessonId) : undefined;

  if (!lesson) {
    return null;
  }

  const isCompleted = completedLessonIds.includes(lesson.id);

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: '#ffffff' }}
      edges={['top', 'left', 'right']}
    >
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-row items-center px-5 pt-2">
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => router.back()}
            hitSlop={8}
            className="h-9 w-9 items-center justify-center"
          >
            <Ionicons
              name="chevron-back"
              size={26}
              color={colors.textPrimary}
            />
          </TouchableOpacity>
          <Text
            className="ml-1 flex-1 font-poppins-semibold text-h4 text-text-primary"
            numberOfLines={1}
          >
            {lesson.title}
          </Text>
        </View>

        <Image
          source={{ uri: lesson.imageUrl }}
          resizeMode="cover"
          className="mt-3 h-52 w-full bg-surface"
        />

        <View className="px-5">
          <View className="mt-5 flex-row items-center justify-between">
            <View className="flex-1 pr-3">
              <Text className="font-poppins-regular text-body-sm text-text-secondary">
                Goal
              </Text>
              <Text className="mt-0.5 font-poppins-semibold text-body-md text-text-primary">
                {lesson.goal}
              </Text>
            </View>
            <View className="flex-row items-center gap-1 rounded-full bg-surface px-3 py-1.5">
              <Ionicons name="flash" size={16} color={colors.streak} />
              <Text className="font-poppins-semibold text-body-md text-text-primary">
                {lesson.xpReward} XP
              </Text>
            </View>
          </View>

          {/* Vocabulary */}
          <Text className="mt-6 font-poppins-semibold text-h4 text-text-primary">
            Vocabulary
          </Text>
          <View className="mt-3">
            {lesson.vocabulary.map((item) => (
              <View
                key={item.id}
                className="mb-2 flex-row items-center justify-between rounded-2xl border border-border bg-white px-4 py-3"
              >
                <View>
                  <Text className="font-poppins-semibold text-body-md text-text-primary">
                    {item.term}
                  </Text>
                  {item.phonetic ? (
                    <Text className="font-poppins-regular text-body-sm text-text-secondary">
                      {item.phonetic}
                    </Text>
                  ) : null}
                </View>
                <Text className="font-poppins-regular text-body-md text-text-secondary">
                  {item.translation}
                </Text>
              </View>
            ))}
          </View>

          {/* Phrases */}
          <Text className="mt-6 font-poppins-semibold text-h4 text-text-primary">
            Key phrases
          </Text>
          <View className="mt-3">
            {lesson.phrases.map((phrase) => (
              <View
                key={phrase.id}
                className="mb-2 rounded-2xl border border-border bg-white px-4 py-3"
              >
                <Text className="font-poppins-semibold text-body-md text-text-primary">
                  {phrase.phrase}
                </Text>
                <Text className="mt-0.5 font-poppins-regular text-body-sm text-text-secondary">
                  {phrase.translation}
                </Text>
              </View>
            ))}
          </View>

          {/* Activities */}
          <Text className="mt-6 font-poppins-semibold text-h4 text-text-primary">
            Activities
          </Text>
          <View className="mt-3">
            {lesson.activities.map((activity) => (
              <View
                key={activity.id}
                className="mb-3 flex-row items-center rounded-2xl bg-surface p-3"
              >
                <View className="h-11 w-11 items-center justify-center rounded-2xl bg-lingua-purple-deep">
                  <Ionicons
                    name={ACTIVITY_ICONS[activity.type]}
                    size={18}
                    color="#ffffff"
                  />
                </View>
                <View className="ml-3 flex-1">
                  <Text className="font-poppins-semibold text-body-md text-text-primary">
                    {activity.title}
                  </Text>
                  <Text className="mt-0.5 font-poppins-regular text-body-sm text-text-secondary">
                    {activity.description}
                  </Text>
                </View>
              </View>
            ))}
          </View>

          <PrimaryButton
            label={isCompleted ? 'Completed' : 'Mark lesson as complete'}
            disabled={isCompleted}
            className={`mt-4 ${isCompleted ? 'opacity-60' : ''}`}
            onPress={() => {
              completeLesson(lesson.id, lesson.xpReward);
              posthog?.capture('lesson_completed', {
                lesson_id: lesson.id,
                language_code: lesson.languageCode,
                xp_reward: lesson.xpReward,
              });
              router.back();
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
