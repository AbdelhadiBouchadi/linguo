import { useSSO } from '@clerk/expo/experimental';
import { useRouter } from 'expo-router';
import { useCallback, useState } from 'react';
import { Alert } from 'react-native';

export type SocialStrategy = 'oauth_google' | 'oauth_facebook' | 'oauth_apple';

export function useSocialAuth() {
  const { startSSOFlow } = useSSO();
  const router = useRouter();
  const [loadingStrategy, setLoadingStrategy] = useState<SocialStrategy | null>(
    null,
  );

  const signInWithStrategy = useCallback(
    async (strategy: SocialStrategy) => {
      setLoadingStrategy(strategy);
      try {
        const { createdSessionId } = await startSSOFlow({ strategy });
        if (createdSessionId) {
          router.replace('/');
        }
      } catch (error) {
        console.error('Social auth error:', error);
        Alert.alert(
          'Sign in failed',
          'Something went wrong. Please try again.',
        );
      } finally {
        setLoadingStrategy(null);
      }
    },
    [startSSOFlow, router],
  );

  return { signInWithStrategy, loadingStrategy };
}
