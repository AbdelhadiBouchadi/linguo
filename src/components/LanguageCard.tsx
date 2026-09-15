import { Ionicons } from '@expo/vector-icons';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { colors } from '@/theme';
import type { Language } from '@/types/learning';

type LanguageCardProps = {
  language: Language;
  selected: boolean;
  onPress: () => void;
};

export function LanguageCard({ language, selected, onPress }: LanguageCardProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      className={`mb-3 flex-row items-center rounded-2xl border-2 p-3 ${
        selected
          ? 'border-lingua-purple-deep bg-lingua-purple/5'
          : 'border-border bg-white'
      }`}
    >
      <Image
        source={{ uri: language.flagEmoji.replace('16x12', '80x60') }}
        className="h-12 w-12 rounded-full bg-surface"
      />
      <View className="ml-3 flex-1">
        <Text className="font-poppins-semibold text-body-lg text-text-primary">
          {language.name}
        </Text>
        <Text className="mt-0.5 font-poppins-regular text-body-sm text-text-secondary">
          {language.learnersLabel}
        </Text>
      </View>
      {selected ? (
        <View className="h-6 w-6 items-center justify-center rounded-full bg-lingua-purple-deep">
          <Ionicons name="checkmark" size={14} color="#ffffff" />
        </View>
      ) : (
        <Ionicons name="chevron-forward" size={20} color={colors.textSecondary} />
      )}
    </TouchableOpacity>
  );
}
