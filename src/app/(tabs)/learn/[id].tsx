import { useUser } from '@clerk/expo';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from '@/constants/images';
import { getLanguageByCode } from '@/data/languages';
import { getLessonById } from '@/data/lessons';
import { posthog } from '@/lib/posthog';
import { useProgressStore } from '@/store/useProgressStore';
import { colors } from '@/theme';

/** How long a single AI teacher session lasts, in minutes. */
const SESSION_MINUTES = 12;

/** How long the teacher stays on one phrase before moving to the next one. */
const PHRASE_INTERVAL_MS = 6000;

/**
 * Mock end-of-session feedback. Real scoring arrives with the Vision Agent,
 * for now this shows the three skills the AI teacher grades.
 */
const SESSION_FEEDBACK = [
  { label: 'Speaking', value: 'Excellent', className: 'text-success' },
  { label: 'Pronunciation', value: 'Great', className: 'text-lingua-blue' },
  { label: 'Grammar', value: 'Good', className: 'text-lingua-purple-deep' },
];

export default function AudioLesson() {
  const router = useRouter();
  const { user } = useUser();
  const params = useLocalSearchParams<{ id: string | string[] }>();
  const lessonId = Array.isArray(params.id) ? params.id[0] : params.id;

  const completeLesson = useProgressStore((state) => state.completeLesson);

  const lesson = lessonId ? getLessonById(lessonId) : undefined;
  const language = lesson ? getLanguageByCode(lesson.languageCode) : undefined;
  const phrases = lesson?.phrases ?? [];

  const [secondsLeft, setSecondsLeft] = useState(SESSION_MINUTES * 60);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);
  const [areSubtitlesOn, setAreSubtitlesOn] = useState(true);
  const [isTeacherAudioOn, setIsTeacherAudioOn] = useState(true);

  // Session countdown shown in the header.
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((seconds) => (seconds > 0 ? seconds - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // The teacher walks through the lesson phrases while she is talking.
  useEffect(() => {
    if (!isTeacherAudioOn || phrases.length < 2) return;

    const timer = setInterval(() => {
      setPhraseIndex((index) => (index + 1) % phrases.length);
    }, PHRASE_INTERVAL_MS);

    return () => clearInterval(timer);
  }, [isTeacherAudioOn, phrases.length]);

  useEffect(() => {
    if (!lesson) return;

    posthog?.capture('audio_lesson_started', {
      lesson_id: lesson.id,
      language_code: lesson.languageCode,
      teacher_name: lesson.aiTeacherPrompt.teacherName,
    });
  }, [lesson]);

  if (!lesson) {
    return null;
  }

  const currentPhrase = phrases[phraseIndex];
  const minutesLeft = Math.ceil(secondsLeft / 60);
  const initials = (user?.firstName ?? user?.username ?? 'You')
    .slice(0, 2)
    .toUpperCase();

  const handleEndCall = () => {
    completeLesson(lesson.id, lesson.xpReward);
    posthog?.capture('audio_lesson_ended', {
      lesson_id: lesson.id,
      language_code: lesson.languageCode,
      seconds_spent: SESSION_MINUTES * 60 - secondsLeft,
    });

    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace('/learn');
    }
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: colors.background }}
      edges={['top', 'left', 'right']}
    >
      {/* Header */}
      <View className="flex-row items-center px-5 pt-2">
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() =>
            router.canGoBack() ? router.back() : router.replace('/learn')
          }
          hitSlop={8}
          accessibilityRole="button"
          accessibilityLabel="Go back"
          className="h-9 w-9 items-center justify-center"
        >
          <Ionicons name="chevron-back" size={26} color={colors.textPrimary} />
        </TouchableOpacity>

        <View className="ml-1 flex-1">
          <Text className="font-poppins-semibold text-h3 text-text-primary">
            AI Teacher
          </Text>
          <View className="mt-0.5 flex-row items-center gap-2">
            <View
              className={`h-2.5 w-2.5 rounded-full ${
                isMicOn ? 'bg-lingua-green' : 'bg-streak'
              }`}
            />
            <Text className="font-poppins-regular text-body-lg text-text-secondary">
              {isMicOn ? 'Online' : 'Muted'}
            </Text>
          </View>
        </View>

        <View className="flex-row items-center gap-2">
          <View className="h-9 w-9 items-center justify-center rounded-full border border-border bg-white">
            <Ionicons name="videocam" size={18} color={colors.textPrimary} />
          </View>
          <View className="h-9 w-9 items-center justify-center rounded-full border border-border bg-white">
            <Text className="font-poppins-semibold text-body-md text-text-primary">
              {minutesLeft}
            </Text>
          </View>
          <View className="h-9 w-9 items-center justify-center rounded-full border border-border bg-white">
            <Ionicons
              name="notifications"
              size={18}
              color={colors.textPrimary}
            />
          </View>
        </View>
      </View>

      {/* Call stage. The teacher tile is a preview placeholder until Stream lands. */}
      <View className="mx-2.5 mb-2 mt-3 flex-1 overflow-hidden rounded-[28px] bg-surface">
        <LinearGradient
          colors={[
            '#EADCC8',
            '#D8C9B4',
            '#B4AAA2',
            '#9C9899',
            '#C9C7CE',
            '#F2F2F5',
          ]}
          locations={[0, 0.28, 0.5, 0.68, 0.84, 1]}
          style={StyleSheet.absoluteFill}
        />

        <Image
          source={images.mascotWelcome}
          resizeMode="contain"
          className="absolute left-[4%] top-[3%] h-[58%] w-[74%]"
        />

        {/* Lesson context: language, teacher, title and goal */}
        <View className="absolute left-4 top-4 max-w-[56%] rounded-2xl bg-black/35 px-3 py-2">
          <View className="flex-row items-center gap-2">
            {language ? (
              <Image
                source={{ uri: language.flagEmoji }}
                className="h-5 w-5 rounded-full bg-white/40"
              />
            ) : null}
            <Text className="font-poppins-semibold text-body-sm text-white">
              {lesson.aiTeacherPrompt.teacherName}
              {language ? ` · ${language.name}` : ''}
            </Text>
          </View>
          <Text className="mt-1 font-poppins-medium text-caption text-white">
            {lesson.title}
          </Text>
          <Text className="font-poppins-regular text-caption text-white/80">
            {lesson.goal}
          </Text>
        </View>

        {/* Self preview */}
        <View className="absolute right-4 top-4 h-36 w-24 overflow-hidden rounded-2xl border-[3px] border-white bg-surface">
          {isCameraOn && user?.imageUrl ? (
            <Image
              source={{ uri: user.imageUrl }}
              resizeMode="cover"
              className="h-full w-full"
            />
          ) : (
            <View className="h-full w-full items-center justify-center bg-lingua-purple-deep">
              {isCameraOn ? (
                <Text className="font-poppins-semibold text-h3 text-white">
                  {initials}
                </Text>
              ) : (
                <>
                  <Ionicons name="videocam-off" size={22} color="#ffffff" />
                  <Text className="mt-1 font-poppins-medium text-caption text-white">
                    Camera off
                  </Text>
                </>
              )}
            </View>
          )}
        </View>

        <View className="flex-1 justify-end">
          {/* Teacher response bubble */}
          {currentPhrase ? (
            <View
              className="mx-16 mb-8 rounded-3xl bg-white px-5 py-4"
              style={styles.bubbleShadow}
            >
              <View className="flex-row items-center">
                <View className="flex-1 pr-3">
                  <Text className="font-poppins-medium text-body-lg text-text-primary">
                    {currentPhrase.phrase}
                  </Text>
                  {areSubtitlesOn ? (
                    <Text className="mt-2 font-poppins-medium text-body-lg text-text-primary">
                      {currentPhrase.translation} 👏
                    </Text>
                  ) : null}
                </View>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => setIsTeacherAudioOn((value) => !value)}
                  hitSlop={8}
                  accessibilityRole="button"
                  accessibilityLabel={
                    isTeacherAudioOn ? 'Mute the teacher' : 'Unmute the teacher'
                  }
                >
                  <Ionicons
                    name={isTeacherAudioOn ? 'volume-high' : 'volume-mute'}
                    size={28}
                    color={colors.linguaPurple}
                  />
                </TouchableOpacity>
              </View>

              {/* Bubble tail */}
              <View style={styles.bubbleTail} />
            </View>
          ) : null}

          {/* Call controls */}
          <View className="flex-row items-start justify-between px-6">
            <CallControl
              label="Camera"
              icon={isCameraOn ? 'videocam' : 'videocam-off'}
              isActive={isCameraOn}
              onPress={() => setIsCameraOn((value) => !value)}
            />
            <CallControl
              label="Mic"
              icon={isMicOn ? 'mic' : 'mic-off'}
              isActive={isMicOn}
              onPress={() => setIsMicOn((value) => !value)}
            />
            <CallControl
              label="Subtitles"
              icon={areSubtitlesOn ? 'language' : 'language-outline'}
              isActive={areSubtitlesOn}
              onPress={() => setAreSubtitlesOn((value) => !value)}
            />
            <CallControl
              label="End Call"
              icon="call"
              variant="danger"
              onPress={handleEndCall}
            />
          </View>

          {/* Lesson feedback */}
          <View
            className="mx-2 mb-5 mt-5 flex-row rounded-[28px] bg-white px-1 py-5"
            style={styles.cardShadow}
          >
            {SESSION_FEEDBACK.map((item, index) => (
              <View
                key={item.label}
                className={`flex-1 items-center px-1 ${
                  index > 0 ? 'border-l border-border' : ''
                }`}
              >
                {/* Single line keeps the three columns on a shared baseline */}
                <Text
                  numberOfLines={1}
                  className="font-poppins-semibold text-body-sm text-text-primary"
                >
                  {item.label}
                </Text>
                <Text
                  numberOfLines={1}
                  className={`mt-1.5 font-poppins-semibold text-body-sm ${item.className}`}
                >
                  {item.value}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

type CallControlProps = {
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
  isActive?: boolean;
  variant?: 'default' | 'danger';
};

function CallControl({
  label,
  icon,
  onPress,
  isActive = true,
  variant = 'default',
}: CallControlProps) {
  const isDanger = variant === 'danger';

  return (
    <View className="items-center">
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        accessibilityRole="button"
        accessibilityLabel={label}
        className={`h-14.5 w-14.5 items-center justify-center rounded-full ${
          isDanger ? 'bg-error' : isActive ? 'bg-white' : 'bg-text-primary/60'
        }`}
      >
        <Ionicons
          name={icon}
          size={26}
          color={isDanger || !isActive ? '#ffffff' : colors.textPrimary}
          style={isDanger ? styles.endCallIcon : undefined}
        />
      </TouchableOpacity>
      <Text className="mt-3 font-poppins-medium text-body-sm text-white">
        {label}
      </Text>
    </View>
  );
}

// Shadows, the bubble tail triangle and the rotated end-call handset are not
// expressible with NativeWind classNames.
const styles = StyleSheet.create({
  bubbleShadow: {
    shadowColor: '#0D132B',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.16,
    shadowRadius: 16,
    elevation: 6,
  },
  cardShadow: {
    shadowColor: '#0D132B',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 18,
    elevation: 5,
  },
  bubbleTail: {
    position: 'absolute',
    right: 16,
    bottom: -18,
    width: 0,
    height: 0,
    borderLeftWidth: 22,
    borderRightWidth: 0,
    borderTopWidth: 20,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#ffffff',
  },
  endCallIcon: {
    transform: [{ rotate: '135deg' }],
  },
});
