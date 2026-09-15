import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useMemo, useState } from 'react';
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { LanguageCard } from '@/components/LanguageCard';
import { PrimaryButton } from '@/components/PrimaryButton';
import { images } from '@/constants/images';
import { languages } from '@/data/languages';
import { colors } from '@/theme';
import type { Language, LanguageCode } from '@/types/learning';

export default function LanguageSelection() {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [selectedCode, setSelectedCode] = useState<LanguageCode>('es');

  const filteredLanguages = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return languages;
    return languages.filter((language) =>
      language.name.toLowerCase().includes(query),
    );
  }, [search]);

  const renderLanguage = ({ item }: { item: Language }) => (
    <LanguageCard
      language={item}
      selected={item.code === selectedCode}
      onPress={() => setSelectedCode(item.code)}
    />
  );

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: '#ffffff' }}
      edges={['top', 'left', 'right']}
    >
      <View className="flex-1">
        <View className="px-6">
          <View className="relative mt-2 flex-row items-center justify-center">
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => router.back()}
              hitSlop={8}
              className="absolute left-0 h-8 w-8 items-center justify-center"
            >
              <Ionicons
                name="chevron-back"
                size={26}
                color={colors.textPrimary}
              />
            </TouchableOpacity>
            <Text className="font-poppins-semibold text-h3 text-text-primary">
              Choose a language
            </Text>
          </View>

          <View className="mt-6 flex-row items-center gap-2 rounded-full border border-border bg-surface px-4 py-3">
            <Ionicons name="search" size={18} color={colors.textSecondary} />
            <TextInput
              value={search}
              onChangeText={setSearch}
              placeholder="Search languages"
              placeholderTextColor={colors.textSecondary}
              autoCapitalize="none"
              autoCorrect={false}
              className="flex-1 font-poppins-regular text-body-md text-text-primary"
            />
          </View>

          <Text className="mb-3 mt-6 font-poppins-semibold text-body-md text-text-primary">
            Popular
          </Text>
        </View>

        {/* Only this list scrolls — its height is whatever space is left
            between the header/search above and the confirm button + earth
            image below, so the screen itself never scrolls. */}
        <FlatList
          data={filteredLanguages}
          keyExtractor={(item) => item.code}
          renderItem={renderLanguage}
          className="flex-1"
          contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 8 }}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          ListEmptyComponent={
            <Text className="mt-4 text-center font-poppins-regular text-body-md text-text-secondary">
              No languages found.
            </Text>
          }
        />

        <View className="px-6 pt-2">
          <PrimaryButton label="Confirm" onPress={() => router.back()} />
        </View>

        <Image
          source={images.earth}
          resizeMode="cover"
          className="h-48 w-full mt-4"
        />
      </View>
    </SafeAreaView>
  );
}
