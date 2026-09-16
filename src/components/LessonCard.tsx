import { Ionicons } from '@expo/vector-icons';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { colors } from '@/theme';
import type { Lesson } from '@/types/learning';

export type LessonStatus = 'completed' | 'active' | 'locked';

type LessonCardProps = {
  lesson: Lesson;
  order: number;
  status: LessonStatus;
  onPress: () => void;
};

export function LessonCard({ lesson, order, status, onPress }: LessonCardProps) {
  const isActive = status === 'active';

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      className={`mb-3 flex-row items-center rounded-2xl border-2 p-4 ${
        isActive
          ? 'border-lingua-purple-deep bg-lingua-purple/5'
          : 'border-border bg-white'
      }`}
    >
      <View className="flex-1">
        <Text
          className={`font-poppins-medium text-body-sm ${
            isActive ? 'text-lingua-purple-deep' : 'text-text-secondary'
          }`}
        >
          Lesson {order}
        </Text>
        <Text className="mt-0.5 font-poppins-semibold text-body-lg text-text-primary">
          {lesson.title}
        </Text>
        {isActive ? (
          <Text className="mt-0.5 font-poppins-medium text-body-sm text-lingua-purple-deep">
            In progress
          </Text>
        ) : null}
      </View>

      {status === 'completed' ? (
        <View className="h-9 w-9 items-center justify-center rounded-full bg-lingua-green">
          <Ionicons name="checkmark" size={18} color="#ffffff" />
        </View>
      ) : isActive ? (
        <Image
          source={{ uri: lesson.imageUrl }}
          className="h-11 w-11 rounded-xl bg-surface"
        />
      ) : (
        <View className="h-9 w-9 items-center justify-center rounded-full bg-surface">
          <Ionicons name="lock-closed" size={16} color={colors.textSecondary} />
        </View>
      )}
    </TouchableOpacity>
  );
}
