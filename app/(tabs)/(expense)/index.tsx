import { View, Text } from "react-native";
import React from "react";
import { BaseLayout } from "@/app/components/ui/containers";
import { ScreenHeader } from "@/app/components/ui/headers";

export default function ExpenseIndex() {
  return (
    <BaseLayout>
      <ScreenHeader showBack title="Expense Index" />
      <Text>ExpenseIndex</Text>
    </BaseLayout>
  );
}
