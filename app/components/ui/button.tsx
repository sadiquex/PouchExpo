import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

export const PrimaryButton = ({
  children,
  className,
  onPress,
  ...props
}: {
  children: any;
  className?: string;
  props?: any;
  onPress?: () => void;
}) => {
  return (
    <Pressable
      onPress={onPress}
      {...props}
      style={[
        styles.button,
        // className && styles[className]
      ]}
    >
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0D0F1C",
    width: 260,
    marginHorizontal: "auto",
    textAlign: "center",
    paddingVertical: 16,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#ffffff",
  },
});
