import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { ScreenHeader } from "@/app/components/ui/headers";
import { useLocalSearchParams } from "expo-router";
import { BaseLayout } from "@/app/components/ui/containers";
import { AntDesign } from "@expo/vector-icons";
import { goalsData } from "@/data";

export default function GoalDetails() {
  const { id } = useLocalSearchParams();
  const goal = goalsData.find((goal) => goal.id === Number(id));

  if (!goal) {
    return (
      <BaseLayout>
        <ScreenHeader title="Goal Not Found" showBack iconType="dots" />
        <Text style={{ textAlign: "center", fontSize: 18, marginTop: 20 }}>
          Sorry, this goal does not exist.
        </Text>
      </BaseLayout>
    );
  }

  const progress = ((goal.saved / goal.target) * 100).toFixed(1);

  return (
    <BaseLayout
      style={{
        backgroundColor: "#FAFAFB",
      }}
    >
      <ScreenHeader title={goal.category} showBack iconType="dots" />
      {/* Overview card */}
      <View style={styles.overviewCardContainer}>
        <View style={styles.topSection}>
          <View style={styles.chartContainer}>
            <Text>{progress}%</Text>
          </View>

          <View>
            <Text>
              {progress}% done. You{"'"}re almost there!
            </Text>
            <Text>
              {goal.saved >= goal.target ? "Completed" : "In Progress"}
            </Text>
          </View>
        </View>

        <View style={styles.separator} />

        <View>
          <Text style={styles.amount}>
            GHS {goal.saved.toLocaleString()} / GHS{" "}
            {goal.target.toLocaleString()}
          </Text>
        </View>
      </View>

      {/* Recent updates */}
      <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
        }}
      >
        Recent updates
      </Text>

      {/* recent update cards */}
      <ScrollView>
        {[1, 2, 3].map((_, i) => (
          <View key={i} style={styles.recentUpdateCardContainer}>
            <View style={{ flexDirection: "row", gap: 12 }}>
              <View style={styles.recentUpdateIconContainer}>
                <AntDesign name={goal.icon as any} size={24} color="#fff" />
              </View>
              <View>
                <Text
                  style={{ fontWeight: "600", fontSize: 16, marginBottom: 4 }}
                >
                  Contribution #{i + 1}
                </Text>
                <Text
                  style={{
                    color: "#667085",
                    fontWeight: "500",
                  }}
                >
                  {new Date(2025, 3, 20 + i).toDateString()}
                </Text>
              </View>
            </View>
            <Text style={{ color: "red", fontSize: 14, fontWeight: "600" }}>
              GHS {(goal.target * 0.05).toFixed(2)}
            </Text>
          </View>
        ))}
      </ScrollView>
    </BaseLayout>
  );
}

const styles = StyleSheet.create({
  overviewCardContainer: {
    padding: 16,
    backgroundColor: "#fff",
    marginBottom: 16,
    borderRadius: 8,
    gap: 12,
    borderWidth: 1,
    borderColor: "#c2c2c25f",
  },
  topSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  chartContainer: {
    height: 92,
    width: 92,
    backgroundColor: "pink",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    marginVertical: 10,
  },
  amount: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  // recent update card
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
