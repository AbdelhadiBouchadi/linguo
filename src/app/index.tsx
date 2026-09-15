import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SWATCHES = [
  { label: 'Lingua Purple', className: 'bg-lingua-purple' },
  { label: 'Lingua Deep Purple', className: 'bg-lingua-purple-deep' },
  { label: 'Lingua Blue', className: 'bg-lingua-blue' },
  { label: 'Lingua Green', className: 'bg-lingua-green' },
  { label: 'Success', className: 'bg-success' },
  { label: 'Warning', className: 'bg-warning' },
  { label: 'Streak', className: 'bg-streak' },
  { label: 'Error', className: 'bg-error' },
  { label: 'Info', className: 'bg-info' },
] as const;

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <ScrollView contentContainerStyle={{ padding: 24, gap: 24 }}>
        <View className="gap-2">
          <Text className="font-poppins-bold text-h1 text-text-primary">
            Design System
          </Text>
          <Text className="font-poppins-regular text-body-md text-text-secondary">
            Colors and typography tokens from the Lingua design theme.
          </Text>
        </View>

        <View className="gap-3">
          <Text className="font-poppins-semibold text-h3 text-text-primary">
            Colors
          </Text>
          <View className="flex-row flex-wrap gap-3">
            {SWATCHES.map((swatch) => (
              <View key={swatch.label} className="w-28 gap-1.5">
                <View
                  className={`h-16 w-28 rounded-2xl border border-border ${swatch.className}`}
                />
                <Text className="font-poppins-medium text-caption text-text-secondary">
                  {swatch.label}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <View className="gap-3">
          <Text className="font-poppins-semibold text-h3 text-text-primary">
            Typography
          </Text>
          <View className="gap-3 rounded-2xl border border-border bg-surface p-4">
            <Text className="font-poppins-bold text-h1 text-text-primary">
              H1 Page Title
            </Text>
            <Text className="font-poppins-semibold text-h2 text-text-primary">
              H2 Section Title
            </Text>
            <Text className="font-poppins-semibold text-h3 text-text-primary">
              H3 Card Title
            </Text>
            <Text className="font-poppins-medium text-h4 text-text-primary">
              H4 Subheading
            </Text>
            <Text className="font-poppins-regular text-body-lg text-text-primary">
              Body Large - important content
            </Text>
            <Text className="font-poppins-regular text-body-md text-text-primary">
              Body Medium - body text
            </Text>
            <Text className="font-poppins-regular text-body-sm text-text-secondary">
              Body Small - supporting text
            </Text>
            <Text className="font-poppins-regular text-caption text-text-secondary">
              CAPTION - LABELS, META TEXT
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
