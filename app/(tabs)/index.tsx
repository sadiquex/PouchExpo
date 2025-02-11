import { Text, View, StyleSheet, FlatList, ScrollView } from "react-native";
import { BaseLayout } from "../components/ui/containers";
import { BudgetCard, ExpenseCard, IncomeCard } from "../components/ui/cards";
import { HomeHeader } from "../components/ui/headers";
import { Link } from "expo-router";
import { expenseData } from "@/data";

export default function Index() {
  return (
    <BaseLayout>
      <HomeHeader />
      {/* <Link href={"/(tabs)/(expense)"}>Expense index</Link> */}
      {/* overview cards */}
      <View style={styles.card}>
        <Text
          style={{
            color: "white",
            fontSize: 20,
          }}
        >
          balance card
        </Text>
      </View>

      <ScrollView>
        <View style={{ marginBottom: 12 }}>
          <FlatList
            horizontal
            data={[1, 2, 3, 4, 5, 6]}
            renderItem={(item) => (
              <View style={{ marginRight: 12 }}>
                <IncomeCard />
              </View>
            )}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View>
          <Text>Expense categories</Text>
          <FlatList
            numColumns={2}
            columnWrapperStyle={{
              gap: 8,
            }}
            data={expenseData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={(item) => (
              <ExpenseCard expense={item.item} key={item.index} />
            )}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View>
          <Text>Budget Plans</Text>
          <FlatList
            data={[1, 2]}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
            columnWrapperStyle={{
              gap: 8,
            }}
            renderItem={(item) => <BudgetCard key={item.index} />}
          />
        </View>
      </ScrollView>
    </BaseLayout>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#fff",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
  card: {
    height: 234,
    backgroundColor: "blue",
    borderRadius: 12,
    padding: 8,
  },
});
