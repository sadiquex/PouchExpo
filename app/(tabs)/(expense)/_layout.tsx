import { Stack } from "expo-router";

export default function ExpenseLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="addExpense"
        options={{ headerShown: false, title: "Add Expense" }}
      />
    </Stack>
  );
}
