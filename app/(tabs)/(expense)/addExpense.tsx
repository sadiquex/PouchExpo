import { View, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import { BaseLayout } from "@/app/components/ui/containers";
import { ScreenHeader } from "@/app/components/ui/headers";
import {
  LabelInputField,
  LabelTextArea,
} from "@/app/components/ui/label-input-field";
import { PrimaryButton } from "@/app/components/ui/button";

export default function AddExpense() {
  const [goalName, setGoalName] = useState("");
  const [amount, setAmount] = useState("");
  const [completionDate, setCompletionDate] = useState("");
  const [notes, setNotes] = useState("");

  return (
    <BaseLayout>
      <ScreenHeader title="Add new expense" showBack />

      <View style={styles.formContainer}>
        <LabelInputField
          label="Expense name (required)"
          placeholder="E.g; Electricity bill"
          type="default"
          onChangeText={setGoalName}
          value={goalName}
        />
        <LabelInputField
          label="Amount (required)"
          placeholder="E.g: 500.00"
          type="default"
          onChangeText={setAmount}
          value={amount}
        />
        <LabelInputField
          label="Category (required)"
          placeholder="Select category"
          type="default"
          onChangeText={setCompletionDate}
          value={completionDate}
        />
        <LabelTextArea
          label="Notes"
          placeholder="E.g; Bought fruits and vegetables"
          onChangeText={setNotes}
          value={notes}
        />
      </View>
      <Link href={".."} asChild>
        <PrimaryButton>Save Expense</PrimaryButton>
      </Link>
    </BaseLayout>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#e6e3e3",
  },
});
