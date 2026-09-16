import { ClerkProvider, useUser } from '@clerk/expo';
import { tokenCache } from '@clerk/expo/token-cache';
import { useFonts } from 'expo-font';
import { Stack, usePathname } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useRef } from 'react';
import { PostHogProvider } from 'posthog-react-native';

import { fontAssets } from '@/constants/fonts';
import { posthog } from '@/lib/posthog';

import '../global.css';

SplashScreen.preventAutoHideAsync();

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

if (!publishableKey) {
  throw new Error('Add your Clerk Publishable Key to the .env file');
}

function AnalyticsLifecycle() {
  const pathname = usePathname();
  const { isLoaded, isSignedIn, user } = useUser();
  const previousPathname = useRef<string | null>(null);
  const identifiedUserId = useRef<string | null>(null);

  useEffect(() => {
    if (!posthog || previousPathname.current === pathname) return;

    posthog.screen(pathname, {
      previous_screen: previousPathname.current,
    });
    previousPathname.current = pathname;
  }, [pathname]);

  useEffect(() => {
    if (!posthog || !isLoaded) return;

    if (isSignedIn && user) {
      posthog.identify(user.id);
      identifiedUserId.current = user.id;
    } else if (identifiedUserId.current) {
      posthog.reset();
      identifiedUserId.current = null;
    }
  }, [isLoaded, isSignedIn, user]);

  return null;
}

export default function RootLayout() {
  const [fontsLoaded] = useFonts(fontAssets);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const navigation = <Stack screenOptions={{ headerShown: false }} />;

  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      {posthog ? (
        <PostHogProvider client={posthog}>
          <AnalyticsLifecycle />
          {navigation}
        </PostHogProvider>
      ) : (
        navigation
      )}
    </ClerkProvider>
  );
}
