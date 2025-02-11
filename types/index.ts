import { AntDesign } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export interface GoalType {
  id: number;
  category: string;
  saved: number;
  target: number;
  icon: keyof typeof AntDesign.glyphMap; // only valid AntDesign icon names are used
}

export interface ExpenseType {
  id: number;
  expenseAmount: number;
  expenseCategory: string;
  percentage: number;
  icon: keyof typeof MaterialCommunityIcons.glyphMap; // only valid MaterialCommunityIcons icon names are used
}
