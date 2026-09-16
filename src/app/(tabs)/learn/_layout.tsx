import { Stack } from 'expo-router';

// A stack nested inside the Learn tab so pushing a lesson keeps the bottom
// tab bar visible (and keeps "Learn" highlighted) like in the design.
export default function LearnLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
