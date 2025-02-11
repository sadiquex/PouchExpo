import { Stack } from "expo-router";
import { LogBox } from "react-native";

// LogBox.ignoreAllLogs(true);

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* when the app first launches, it'll look for the index file in '(tabs)' */}
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(expense)" />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
