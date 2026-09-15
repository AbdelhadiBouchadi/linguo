import { useSignIn } from '@clerk/expo';
import { Ionicons } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AuthTextField } from '@/components/AuthTextField';
import { PrimaryButton } from '@/components/PrimaryButton';
import { SocialButton } from '@/components/SocialButton';
import { VerificationModal } from '@/components/VerificationModal';
import { images } from '@/constants/images';
import { useSocialAuth } from '@/hooks/useSocialAuth';
import { colors } from '@/theme';

export default function SignIn() {
  const router = useRouter();
  const { signIn, fetchStatus } = useSignIn();
  const { signInWithStrategy, loadingStrategy } = useSocialAuth();

  const [email, setEmail] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);

  const handleSignIn = async () => {
    const { error } = await signIn.emailCode.sendCode({ emailAddress: email });
    if (error) {
      Alert.alert('Log in failed', error.longMessage ?? error.message);
      return;
    }

    setIsVerifying(true);
  };

  const handleVerifyCode = async (code: string) => {
    const { error } = await signIn.emailCode.verifyCode({ code });
    if (error) {
      return error.longMessage ?? error.message;
    }

    if (signIn.status === 'complete') {
      await signIn.finalize({
        navigate: () => router.replace('/'),
      });
    }
  };

  const handleResendCode = async () => {
    await signIn.emailCode.sendCode({ emailAddress: email });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          className="flex-1 px-6"
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 24 }}
          keyboardShouldPersistTaps="handled"
        >
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => router.back()}
            hitSlop={8}
            className="mt-2 h-8 w-8 items-center justify-center"
          >
            <Ionicons
              name="chevron-back"
              size={26}
              color={colors.textPrimary}
            />
          </TouchableOpacity>

          <View className="mt-4">
            <Text className="font-poppins-bold text-h1 text-text-primary">
              Welcome back
            </Text>
            <Text className="mt-2 font-poppins-regular text-body-lg text-text-secondary">
              Log in to continue your journey ✨
            </Text>
          </View>

          <View className="my-6 items-center">
            <View className="relative h-44 w-full items-center justify-center">
              <Image
                source={images.mascotAuth}
                resizeMode="contain"
                className="h-44 w-44"
              />
              <Ionicons
                name="sparkles"
                size={18}
                color={colors.warning}
                style={{ position: 'absolute', left: '18%', top: 4 }}
              />
              <Ionicons
                name="sparkles"
                size={16}
                color={colors.info}
                style={{ position: 'absolute', right: '14%', top: 18 }}
              />
              <Ionicons
                name="sparkles"
                size={14}
                color={colors.linguaPurple}
                style={{ position: 'absolute', right: '20%', bottom: 8 }}
              />
            </View>
          </View>

          <AuthTextField
            label="Email"
            placeholder="example@gmail.com"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          <PrimaryButton
            label="Log In"
            className="mt-2"
            disabled={fetchStatus === 'fetching'}
            onPress={handleSignIn}
          />

          <View className="my-6 flex-row items-center gap-3">
            <View className="h-px flex-1 bg-border" />
            <Text className="font-poppins-regular text-body-sm text-text-secondary">
              or continue with
            </Text>
            <View className="h-px flex-1 bg-border" />
          </View>

          <SocialButton
            label="Continue with Google"
            icon="logo-google"
            iconColor="#EA4335"
            disabled={loadingStrategy !== null}
            onPress={() => signInWithStrategy('oauth_google')}
          />
          <SocialButton
            label="Continue with Facebook"
            icon="logo-facebook"
            iconColor="#1877F2"
            disabled={loadingStrategy !== null}
            onPress={() => signInWithStrategy('oauth_facebook')}
          />
          <SocialButton
            label="Continue with Apple"
            icon="logo-apple"
            iconColor={colors.textPrimary}
            disabled={loadingStrategy !== null}
            onPress={() => signInWithStrategy('oauth_apple')}
          />

          <View className="mt-auto flex-row items-center justify-center pt-8">
            <Text className="font-poppins-regular text-body-md text-text-secondary">
              Don&apos;t have an account?{' '}
            </Text>
            <Link href="/sign-up" replace asChild>
              <TouchableOpacity activeOpacity={0.7}>
                <Text className="font-poppins-semibold text-body-md text-lingua-purple-deep">
                  Sign Up
                </Text>
              </TouchableOpacity>
            </Link>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <VerificationModal
        visible={isVerifying}
        email={email || 'your email'}
        onRequestClose={() => setIsVerifying(false)}
        onVerify={handleVerifyCode}
        onResend={handleResendCode}
      />
    </SafeAreaView>
  );
}
