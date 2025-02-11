import { View, ScrollView, Text, StyleSheet } from "react-native";
import React from "react";
import { SceneMap } from "react-native-tab-view";
import TabViewOptions from "@/app/components/ui/tab-view-options";
import { BaseLayout } from "@/app/components/ui/containers";
import { GoalCard } from "@/app/components/ui/cards";
import { ScreenHeader } from "@/app/components/ui/headers";
import { router } from "expo-router";
import { goalsData } from "@/data";

const Layout = ({ status }: { status: "InProgress" | "Completed" }) => (
  <BaseLayout>
    <View style={styles.container}>
      <Text style={styles.title}>
        {status === "InProgress" ? "Goals in Progress" : "Completed Goals"}
      </Text>
      <ScrollView>
        {goalsData.map((goal, i) => (
          <GoalCard key={goal.id} goal={goal} />
        ))}
      </ScrollView>
    </View>
  </BaseLayout>
);

const InProgress = () => (
  <ScrollView>
    <Layout status="InProgress" />
  </ScrollView>
);

const Completed = () => (
  <ScrollView>
    <Layout status="Completed" />
  </ScrollView>
);

const renderScene = SceneMap({
  first: InProgress,
  second: Completed,
});
const routes = [
  { key: "first", title: "In-Progress" },
  { key: "second", title: "Completed" },
];

function GoalsTrackerScreen() {
  return (
    <BaseLayout>
      <ScreenHeader
        iconType="plus"
        title="Goals"
        onIconPress={() => router.push("/(tabs)/goals/addGoal")}
      />
      <TabViewOptions renderScene={renderScene} routes={routes} />
    </BaseLayout>
  );
}

export default GoalsTrackerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 12,
  },
  title: {
    fontSize: 16,
  },
});
