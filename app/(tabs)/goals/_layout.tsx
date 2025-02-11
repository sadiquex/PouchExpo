import React from "react";
import { Stack } from "expo-router";

export default function GoalsLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        title: "",
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="addGoal" />
      <Stack.Screen name="[id]" />
    </Stack>
  );
}
