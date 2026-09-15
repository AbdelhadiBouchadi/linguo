import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from '@/constants/images';

export default function Onboarding() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <View className="flex-1 px-6">
        <View className="mt-2 flex-row items-center justify-center gap-2">
          <Image
            source={images.mascotLogo}
            resizeMode="contain"
            className="h-9 w-9"
          />
          <Text className="font-poppins-bold text-h2 text-text-primary uppercase">
            linguo
          </Text>
        </View>

        <View className="mt-10">
          <Text className="font-poppins-bold text-h1 text-text-primary">
            Your AI language
          </Text>
          <Text className="font-poppins-bold text-h1 text-lingua-purple-deep">
            teacher.
          </Text>
          <Text className="mt-3 font-poppins-regular text-body-lg text-text-secondary">
            Real conversations, personalized lessons, anytime, anywhere.
          </Text>
        </View>

        <View className="flex-1 items-center justify-center">
          <View className="relative h-80 w-full items-center justify-center">
            <Image
              source={images.mascotWelcome}
              resizeMode="contain"
              className="h-72 w-72"
            />

            <View className="absolute left-2 top-10 rounded-2xl bg-info/10 px-4 py-2.5">
              <Text className="font-poppins-medium text-body-sm text-text-primary">
                Hello!
              </Text>
            </View>

            <View className="absolute right-6 top-0 rounded-2xl bg-lingua-purple/10 px-4 py-2.5">
              <Text className="font-poppins-medium text-body-sm text-lingua-purple-deep">
                ¡Hola!
              </Text>
            </View>

            <View className="absolute right-0 top-24 rounded-2xl bg-error/10 px-4 py-2.5">
              <Text className="font-poppins-medium text-body-sm text-error">
                你好!
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          activeOpacity={0.85}
          className="mb-6 flex-row items-center justify-center gap-2 rounded-2xl bg-lingua-purple-deep py-4"
        >
          <Text className="font-poppins-semibold text-body-lg text-white">
            Get Started
          </Text>
          <Text className="font-poppins-bold text-body-lg text-white">
            {'›'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
