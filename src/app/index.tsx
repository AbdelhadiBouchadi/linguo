import { useAuth, useClerk } from '@clerk/expo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Link, Redirect } from 'expo-router';
import { useState } from 'react';
import { Alert, Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { PrimaryButton } from '@/components/PrimaryButton';
import { SecondaryButton } from '@/components/SecondaryButton';
import { getLanguageByCode } from '@/data/languages';
import { useLanguageStore } from '@/store/useLanguageStore';

export default function Index() {
  const { isLoaded, isSignedIn } = useAuth();
  const { signOut } = useClerk();
  const [isSigningOut, setIsSigningOut] = useState(false);
  const hasHydrated = useLanguageStore((state) => state.hasHydrated);
  const selectedLanguage = useLanguageStore((state) => state.selectedLanguage);
  const clearSelectedLanguage = useLanguageStore(
    (state) => state.clearSelectedLanguage,
  );

  if (!isLoaded || !hasHydrated) {
    return null;
  }

  if (!isSignedIn) {
    return <Redirect href="/onboarding" />;
  }

  if (!selectedLanguage) {
    return <Redirect href="/language-selection" />;
  }

  const currentLanguage = getLanguageByCode(selectedLanguage);

  const handleSignOut = async () => {
    setIsSigningOut(true);
    try {
      await signOut();
    } catch (error) {
      console.error('Sign out error:', error);
      Alert.alert('Sign out failed', 'Something went wrong. Please try again.');
      setIsSigningOut(false);
    }
  };

  const handleClearStorage = async () => {
    try {
      await AsyncStorage.clear();
      clearSelectedLanguage();
    } catch (error) {
      console.error('Clear storage error:', error);
      Alert.alert('Clear storage failed', 'Something went wrong. Please try again.');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <View className="flex-1 items-center justify-center gap-6 px-6">
        <Text className="font-poppins-bold text-h1 text-text-primary text-center">
          Welcome to Linguo 🎉
        </Text>
        <Text className="text-center font-poppins-regular text-body-md text-text-secondary">
          You&apos;re signed in.
        </Text>

        {currentLanguage ? (
          <View className="flex-row items-center gap-2 rounded-full border border-border bg-surface px-4 py-2">
            <Image
              source={{ uri: currentLanguage.flagEmoji }}
              className="h-6 w-6 rounded-full"
            />
            <Text className="font-poppins-semibold text-body-md text-text-primary">
              Learning {currentLanguage.name}
            </Text>
          </View>
        ) : null}

        <Link href="/language-selection" asChild>
          <PrimaryButton label="Choose a language" className="w-full" />
        </Link>

        <SecondaryButton
          label="Sign Out"
          className="w-full"
          disabled={isSigningOut}
          onPress={handleSignOut}
        />

        <SecondaryButton
          label="Clear Storage (Dev)"
          className="w-full"
          onPress={handleClearStorage}
        />
      </View>
    </SafeAreaView>
  );
}
