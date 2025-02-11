import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { expenseData } from "@/data";
import { BaseLayout } from "@/app/components/ui/containers";
import { ScreenHeader } from "@/app/components/ui/headers";
import { AntDesign } from "@expo/vector-icons";
import { ExpenseType } from "@/types";

export default function ExpenseCategoryDetails() {
  const { categoryId } = useLocalSearchParams();
  const expense = expenseData.find(
    (expense) => expense.id === Number(categoryId)
  );

  if (!expense) {
    return (
      <BaseLayout>
        <ScreenHeader title="Expense Not Found" showBack iconType="dots" />
        <Text style={{ textAlign: "center", fontSize: 18, marginTop: 20 }}>
          Sorry, this expense does not exist.
        </Text>
      </BaseLayout>
    );
  }

  return (
    <BaseLayout>
      <ScreenHeader title={expense.expenseCategory} showBack iconType="dots" />
      <View style={styles.header}>
        <AntDesign name="calendar" size={18} />
        <Text>This month</Text>
      </View>

      {/* overview card */}
      <View style={styles.overviewCardContainer}>
        <Text style={{ textAlign: "center" }}>
          You{"'"}re 60% away from exceeding your budget.
        </Text>

        <View style={styles.separator}>
          <View style={styles.percentComplete} />
        </View>

        <View>
          <Text style={styles.amount}>GHS 2000 / GHS 3000</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          gap: 4,
          marginHorizontal: "auto",
          backgroundColor: "#FFFAEB",
          padding: 8,
          borderRadius: 16,
          borderWidth: 1,
          borderColor: "#912018",
        }}
      >
        <AntDesign name="bulb1" size={16} color="#912018" />
        <Text style={{ fontSize: 12, color: "#912018" }}>
          You have exceeded your budget on payments this month
        </Text>
      </View>

      <View style={{ marginTop: 12, gap: 12 }}>
        <Text>History</Text>

        <ScrollView>
          {[1, 2, 3, 4].map((_, i) => (
            <ExpenseHistoryCard key={i} expense={expense} />
          ))}
        </ScrollView>
      </View>
    </BaseLayout>
  );
}

const ExpenseHistoryCard = ({
  expense,
  key,
}: {
  expense: ExpenseType;
  key: number;
}) => {
  return (
    <View style={styles.recentUpdateCardContainer}>
      <View style={{ flexDirection: "row", gap: 12 }}>
        <View style={styles.recentUpdateIconContainer}>
          <AntDesign name={expense.icon as any} size={24} color="#fff" />
        </View>
        <View>
          <Text style={{ fontWeight: "600", fontSize: 16, marginBottom: 4 }}>
            Contribution #1
          </Text>
          <Text
            style={{
              color: "#667085",
              fontWeight: "500",
            }}
          >
            Fri 7 Feb, 2025
          </Text>
        </View>
      </View>
      <Text style={{ color: "red", fontSize: 14, fontWeight: "600" }}>
        GHS 23
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  historyContainer: {
    marginTop: 20,
  },

  overviewCardContainer: {
    padding: 16,
    backgroundColor: "#fff",
    marginBottom: 16,
    borderRadius: 8,
    gap: 12,
    borderWidth: 1,
    borderColor: "#c2c2c25f",
  },
  separator: {
    borderBottomWidth: 5,
    borderBottomColor: "#E0E0E0",
    marginVertical: 10,
    position: "relative",
  },
  percentComplete: {
    position: "absolute",
    left: 0,
    right: 0,
    backgroundColor: "#007AFF",
    height: 4,
    borderRadius: 2,
    width: "30%",
  },
  amount: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },

  recentUpdateCardContainer: {
    padding: 16,
    backgroundColor: "#fff",
    marginBottom: 4,
    borderRadius: 8,
    gap: 12,
    borderWidth: 1,
    borderColor: "#c2c2c25f",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  recentUpdateIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginInlineEnd: 8,
    backgroundColor: "#1570EF",
  },
});
