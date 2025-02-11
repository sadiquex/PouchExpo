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

export default function AddGoalScreen() {
  const [goalName, setGoalName] = useState("");
  const [amount, setAmount] = useState("");
  const [completionDate, setCompletionDate] = useState("");
  const [notes, setNotes] = useState("");

  return (
    <BaseLayout>
      <ScreenHeader title="Add New Goal" showBack />

      <View style={styles.formContainer}>
        <LabelInputField
          label="Goal name"
          placeholder="Name of savings goal"
          type="default"
          onChangeText={setGoalName}
          value={goalName}
        />
        <LabelInputField
          label="Target amount"
          placeholder="E.g: 500.00"
          type="default"
          onChangeText={setAmount}
          value={amount}
        />
        <LabelInputField
          label="Completion date"
          placeholder="Select date"
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
      <Link href={"/goals"} asChild>
        <PrimaryButton>Save Goal</PrimaryButton>
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
