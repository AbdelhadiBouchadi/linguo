import { useAuth, useClerk } from '@clerk/expo';
import { Redirect } from 'expo-router';
import { useState } from 'react';
import { Alert, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { PrimaryButton } from '@/components/PrimaryButton';

export default function Index() {
  const { isLoaded, isSignedIn } = useAuth();
  const { signOut } = useClerk();
  const [isSigningOut, setIsSigningOut] = useState(false);

  if (!isLoaded) {
    return null;
  }

  if (!isSignedIn) {
    return <Redirect href="/onboarding" />;
  }

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

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <View className="flex-1 items-center justify-center gap-6 px-6">
        <Text className="font-poppins-bold text-h1 text-text-primary text-center">
          Welcome to Linguo 🎉
        </Text>
        <Text className="text-center font-poppins-regular text-body-md text-text-secondary">
          You&apos;re signed in.
        </Text>
        <PrimaryButton
          label="Sign Out"
          className="w-full"
          disabled={isSigningOut}
          onPress={handleSignOut}
        />
      </View>
    </SafeAreaView>
  );
}
