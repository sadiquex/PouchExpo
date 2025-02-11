import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Entypo from "@expo/vector-icons/Entypo";
import { PieChart } from "react-native-gifted-charts";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import { ExpenseType, GoalType } from "@/types";

const budgetData = [
  { value: 40, color: "#47CD89", name: "Transport", percentage: "40%" },
  { value: 20, color: "#FEC84B", name: "Food", percentage: "20%" },
  { value: 10, color: "#36BFFA", name: "Maintainance", percentage: "10%" },
  { value: 30, color: "#D0D5DD", name: "Unallocated", percentage: "30%" },
];

export const IncomeCard = () => {
  return (
    <View style={incomeCardStyles.incomeCardContainer}>
      <View>
        <Text style={incomeCardStyles.incomeSourceName}>Nsano Limited</Text>
        <Text style={incomeCardStyles.incomeType}>Salary</Text>
      </View>
      <View>
        <Text style={incomeCardStyles.incomeDate}>Jan 15, 2025</Text>
        <Text style={incomeCardStyles.incomeAmount}>GHS 10,000/mo</Text>
      </View>
    </View>
  );
};

export const ExpenseCard = ({ expense }: { expense: ExpenseType }) => {
  return (
    <Pressable
      style={expenseCardStyles.container}
      onPress={() => router.navigate(`/(tabs)/(expense)/${expense.id}`)}
    >
      <View>
        <View style={expenseCardStyles.amountAndPercentage}>
          <Text style={expenseCardStyles.expenseAmount}>
            GHS {expense.expenseAmount}
          </Text>
          <Text style={expenseCardStyles.expenseAmount}>
            {expense.percentage}%
          </Text>
        </View>
        <Text style={expenseCardStyles.expenseCategory}>
          {expense.expenseCategory}
        </Text>
      </View>

      <View style={expenseCardStyles.expenseIcon}>
        <MaterialCommunityIcons name={expense.icon} size={24} color="white" />
      </View>
    </Pressable>
  );
};

export const BudgetCard = () => {
  return (
    <Pressable style={budgetCardStyles.container}>
      <View style={budgetCardStyles.topSection}>
        <Text>General Expense</Text>

        <Entypo name="magnet" size={24} color="black" />
      </View>

      <View style={budgetCardStyles.valuesSection}>
        {budgetData.map((item, i) => (
          <View key={i} style={budgetCardStyles.valueCard}>
            <View
              style={[
                budgetCardStyles.budgetColor,
                { backgroundColor: item.color },
              ]}
            />
            <View>
              <Text style={budgetCardStyles.budgetPercentage}>
                {item.percentage}
              </Text>
              <Text style={budgetCardStyles.budgetName}>{item.name}</Text>
            </View>
          </View>
        ))}
      </View>
      <View style={budgetCardStyles.pieChartContainer}>
        <PieChart radius={70} data={budgetData} />
      </View>
    </Pressable>
  );
};

export const GoalCard = ({ goal }: { goal: GoalType }) => {
  return (
    <Pressable
      style={goalCardStyles.container}
      onPress={() => router.navigate(`/(tabs)/goals/${goal.id}`)}
    >
      <View style={goalCardStyles.content}>
        <View style={goalCardStyles.iconContainer}>
          <AntDesign name={goal.icon} size={18} color="#1570EF" />
        </View>
        <View>
          <Text style={goalCardStyles.goalCategory}>{goal.category}</Text>
          <Text style={goalCardStyles.goalAmount}>
            GHS {goal.saved}{" "}
            <Text style={goalCardStyles.goalTotal}>(GHS {goal.target})</Text>
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

const incomeCardStyles = StyleSheet.create({
  incomeCardContainer: {
    backgroundColor: "#FFF4ED",
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  incomeSourceName: {
    fontSize: 14,
    fontWeight: "500",
    color: "#E62E05",
    marginBottom: 6,
  },
  incomeDate: {
    fontSize: 12,
    color: "#475467",
    marginBottom: 6,
    textAlign: "right",
  },
  incomeType: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#475467",
  },
  incomeAmount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#475467",
  },
});

const expenseCardStyles = StyleSheet.create({
  container: {
    backgroundColor: "#F2F4F7",
    width: "50%",
    padding: 12,
    marginBottom: 16,
    borderRadius: 8,
    gap: 24,
    alignItems: "flex-start",
  },
  amountAndPercentage: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  expenseAmount: {
    fontSize: 16,
    fontWeight: "bold",
  },
  expenseCategory: {
    fontSize: 14,
  },
  expenseIcon: {
    backgroundColor: "#1570EF",
    borderRadius: 50,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

const budgetCardStyles = StyleSheet.create({
  container: {
    backgroundColor: "#E9F1F6",
    width: "50%",
    padding: 12,
    marginBottom: 16,
    borderRadius: 8,
    gap: 24,
    alignItems: "flex-start",
    position: "relative",
  },
  topSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  valuesSection: {
    flexDirection: "column",
    gap: 12,
  },
  valueCard: {
    flexDirection: "row",
    gap: 6,
  },
  pieChartContainer: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    right: 0,
  },
  budgetColor: {
    height: 40,
    backgroundColor: "blue",
    width: 6,
    borderRadius: 550,
  },
  budgetPercentage: {
    fontSize: 20,
    fontWeight: "700",
  },
  budgetName: {
    fontWeight: "600",
    color: "#868C98",
  },
});

const goalCardStyles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 12,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginInlineEnd: 8,
    backgroundColor: "#bfdbfe",
    borderWidth: 4,
    borderColor: "#dbeafe",
  },
  goalCategory: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1f2937",
  },
  goalAmount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1f2937",
  },
  goalTotal: {
    color: "#6b7280",
    fontSize: 16,
  },
});
