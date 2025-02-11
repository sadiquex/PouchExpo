import { ExpenseType, GoalType } from "@/types";

export const goalsData: GoalType[] = [
  {
    id: 1,
    category: "Travel & Lifestyle",
    saved: 125,
    target: 3000,
    icon: "car",
  },
  {
    id: 2,
    category: "Emergency Fund",
    saved: 800,
    target: 5000,
    icon: "exclamationcircleo",
  },
  {
    id: 3,
    category: "Home Renovation",
    saved: 1500,
    target: 10000,
    icon: "home",
  },
  { id: 4, category: "New Laptop", saved: 400, target: 2000, icon: "laptop" },
  { id: 5, category: "Wedding", saved: 2500, target: 10000, icon: "hearto" },
];

export const expenseData: ExpenseType[] = [
  {
    id: 1,
    expenseAmount: 447.84,
    expenseCategory: "Travel & Lifestyle",
    icon: "car",
    percentage: 30,
  },
  {
    id: 2,
    expenseAmount: 230.95,
    expenseCategory: "Emergency Fund",
    icon: "account-alert",
    percentage: 20,
  },
  {
    id: 3,
    expenseAmount: 312.15,
    expenseCategory: "Home Renovation",
    icon: "home",
    percentage: 10,
  },
  {
    id: 4,
    expenseAmount: 120.5,
    expenseCategory: "New Laptop",
    icon: "laptop",
    percentage: 15,
  },
];
