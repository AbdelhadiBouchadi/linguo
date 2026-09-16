import { useUser } from '@clerk/expo';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from '@/constants/images';
import { getLanguageByCode } from '@/data/languages';
import { getLessonsByLanguage } from '@/data/lessons';
import { getUnitById } from '@/data/units';
import { useLanguageStore } from '@/store/useLanguageStore';
import { useProgressStore } from '@/store/useProgressStore';
import { colors } from '@/theme';
import type { ActivityType } from '@/types/learning';

const TEACHER_AVATAR_URI =
  'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=200&h=200&fit=crop&crop=faces&auto=format';

const ACTIVITY_STYLES: Record<
  ActivityType,
  { icon: keyof typeof Ionicons.glyphMap; className: string }
> = {
  video: { icon: 'videocam', className: 'bg-lingua-purple-deep' },
  audio: { icon: 'headset', className: 'bg-lingua-purple-deep' },
  chat: { icon: 'chatbubble-ellipses', className: 'bg-lingua-purple-deep' },
  vocabulary: { icon: 'book', className: 'bg-error' },
};

export default function Home() {
  const router = useRouter();
  const { user } = useUser();

  const selectedLanguage = useLanguageStore((state) => state.selectedLanguage);
  const xp = useProgressStore((state) => state.xp);
  const dailyGoalXp = useProgressStore((state) => state.dailyGoalXp);
  const streak = useProgressStore((state) => state.streak);
  const completedLessonIds = useProgressStore(
    (state) => state.completedLessonIds,
  );

  if (!selectedLanguage) {
    return null;
  }

  const language = getLanguageByCode(selectedLanguage);
  const lessons = getLessonsByLanguage(selectedLanguage);
  const currentLesson =
    lessons.find((lesson) => !completedLessonIds.includes(lesson.id)) ??
    lessons[lessons.length - 1];
  const currentUnit = currentLesson
    ? getUnitById(currentLesson.unitId)
    : undefined;
  const isCurrentLessonComplete = currentLesson
    ? completedLessonIds.includes(currentLesson.id)
    : false;

  const goalProgress = Math.min(100, Math.round((xp / dailyGoalXp) * 100));
  const firstName = user?.firstName ?? 'there';

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <ScrollView
        className="flex-1 px-5"
        contentContainerStyle={{ paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View className="mt-2 flex-row items-center justify-between">
          <View className="flex-1 flex-row items-center gap-3">
            {language ? (
              <Image
                source={{ uri: language.flagEmoji }}
                className="h-10 w-10 rounded-full bg-surface"
              />
            ) : null}
            <Text
              className="shrink font-poppins-semibold text-h4 text-text-primary"
              numberOfLines={1}
            >
              {language
                ? `${language.greeting}, ${firstName}!`
                : `Hi, ${firstName}!`}{' '}
              👋
            </Text>
          </View>

          <View className="flex-row items-center gap-3">
            <View className="flex-row items-center gap-1 rounded-full bg-surface px-3 py-1.5">
              <Ionicons name="flame" size={18} color={colors.streak} />
              <Text className="font-poppins-semibold text-body-md text-text-primary">
                {streak}
              </Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.7}
              className="h-9 w-9 items-center justify-center rounded-full bg-surface"
            >
              <Ionicons
                name="notifications-outline"
                size={18}
                color={colors.textPrimary}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Daily goal */}
        <View className="mt-5 flex-row items-center justify-between rounded-3xl bg-[#FBEBDD] p-5">
          <View className="flex-1">
            <Text className="font-poppins-regular text-body-md text-text-secondary">
              Daily goal
            </Text>
            <View className="mt-1 flex-row items-baseline gap-1">
              <Text className="font-poppins-bold text-h2 text-text-primary">
                {xp}
              </Text>
              <Text className="font-poppins-medium text-body-md text-text-secondary">
                / {dailyGoalXp} XP
              </Text>
            </View>
            <View className="mt-3 h-2 w-full overflow-hidden rounded-full bg-[#F2D9B8]">
              <View
                className="h-full rounded-full bg-streak"
                style={{ width: `${goalProgress}%` }}
              />
            </View>
          </View>
          <Image
            source={images.treasure}
            resizeMode="contain"
            className="ml-4 h-20 w-20"
          />
        </View>

        {/* Continue learning */}
        {language && currentLesson && currentUnit ? (
          <LinearGradient
            colors={[colors.linguaPurple, colors.linguaBlue]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{ borderRadius: 24, marginTop: 16, overflow: 'hidden' }}
          >
            <View className="p-5">
              <Text className="font-poppins-regular text-body-md text-white/80">
                Continue learning
              </Text>
              <Text className="mt-1 font-poppins-bold text-h2 text-white">
                {language.name}
              </Text>
              <Text className="mt-0.5 font-poppins-regular text-body-sm text-white/70">
                {currentUnit.level} • Unit {currentUnit.order}
              </Text>
              <TouchableOpacity
                activeOpacity={0.85}
                onPress={() => router.push('/(tabs)/learn')}
                className="mt-4 self-start rounded-full bg-white px-6 py-2.5"
              >
                <Text className="font-poppins-semibold text-body-md text-lingua-purple-deep">
                  Continue
                </Text>
              </TouchableOpacity>
            </View>
            <Image
              source={images.palace}
              resizeMode="contain"
              className="absolute -right-2 bottom-0 h-28 w-32"
            />
          </LinearGradient>
        ) : null}

        {/* Today's plan */}
        {currentLesson ? (
          <View className="mt-6">
            <View className="flex-row items-center justify-between">
              <Text className="font-poppins-semibold text-h4 text-text-primary">
                Today&apos;s plan
              </Text>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => router.push('/(tabs)/learn')}
              >
                <Text className="font-poppins-medium text-body-sm text-lingua-purple-deep">
                  View all
                </Text>
              </TouchableOpacity>
            </View>

            <View className="mt-3">
              {currentLesson.activities.map((activity) => {
                const style = ACTIVITY_STYLES[activity.type];
                return (
                  <View
                    key={activity.id}
                    className="mb-3 flex-row items-center rounded-2xl bg-white"
                  >
                    <View
                      className={`h-12 w-12 items-center justify-center rounded-2xl ${style.className}`}
                    >
                      <Ionicons name={style.icon} size={20} color="#ffffff" />
                    </View>
                    <View className="ml-3 flex-1">
                      <Text className="font-poppins-semibold text-body-md text-text-primary">
                        {activity.title}
                      </Text>
                      <Text className="mt-0.5 font-poppins-regular text-body-sm text-text-secondary">
                        {activity.description}
                      </Text>
                    </View>
                    {isCurrentLessonComplete ? (
                      <View className="h-6 w-6 items-center justify-center rounded-full bg-lingua-purple-deep">
                        <Ionicons name="checkmark" size={14} color="#ffffff" />
                      </View>
                    ) : (
                      <View className="h-6 w-6 rounded-full border-2 border-border" />
                    )}
                  </View>
                );
              })}
            </View>
          </View>
        ) : null}

        {/* Next up */}
        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => router.push('/(tabs)/ai-teacher')}
          className="mt-2 flex-row items-center justify-between rounded-3xl bg-[#EAF3DD] p-4"
        >
          <View className="flex-1">
            <Text className="font-poppins-regular text-body-sm text-text-secondary">
              Next up
            </Text>
            <Text className="mt-0.5 font-poppins-semibold text-body-lg text-text-primary">
              AI Video Call
            </Text>
            <Text className="mt-0.5 font-poppins-regular text-body-sm text-text-secondary">
              Practice speaking
            </Text>
          </View>
          <View className="flex-row items-center">
            <Image
              source={{ uri: TEACHER_AVATAR_URI }}
              className="h-14 w-14 rounded-full bg-surface"
            />
            <View className="-ml-4 h-9 w-9 items-center justify-center rounded-full bg-lingua-green">
              <Ionicons name="videocam" size={16} color="#ffffff" />
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
