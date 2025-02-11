import React from "react";
import { SafeAreaView, StyleSheet, View, ViewStyle } from "react-native";

interface BaseLayoutProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export const BaseLayout = ({ children, style }: BaseLayoutProps) => {
  return (
    <View style={[styles.container, style]}>
      <SafeAreaView style={styles.content}>{children}</SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },

  content: {
    marginHorizontal: 12,
    marginVertical: 10,
    gap: 14,
    height: "100%",
  },
});
