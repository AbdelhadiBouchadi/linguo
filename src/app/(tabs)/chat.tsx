import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Chat() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <View className="flex-1 items-center justify-center px-6">
        <Text className="font-poppins-bold text-h2 text-text-primary">
          Chat
        </Text>
        <Text className="mt-2 text-center font-poppins-regular text-body-md text-text-secondary">
          AI tutor chat coming soon.
        </Text>
      </View>
    </SafeAreaView>
  );
}
