import React, { useState } from "react";
import { Modal, View, Text, Pressable, StyleSheet } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Href, router } from "expo-router";

interface AddActionSheetProps {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
}

interface QuickAction {
  label: string;
  icon: React.ReactElement;
  route: Href;
}

const quickActions: QuickAction[] = [
  {
    label: "Add Expense",
    icon: <FontAwesome5 name="receipt" size={24} color="white" />,
    route: "/(expense)/addExpense",
  },
  {
    label: "Add Goal",
    icon: <FontAwesome5 name="receipt" size={24} color="white" />,
    route: "/(tabs)/goals/addGoal",
  },
  {
    label: "Add Income",
    icon: <FontAwesome5 name="receipt" size={24} color="white" />,
    route: "/(goals)/addGoal",
  },
  {
    label: "Add Budget",
    icon: <FontAwesome5 name="receipt" size={24} color="white" />,
    route: "/(goals)/addGoal",
  },
];

export default function AddActionSheet({
  setModalVisible,
  modalVisible,
}: AddActionSheetProps) {
  const handleNavigation = (route: QuickAction["route"]) => {
    router.navigate(route);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setModalVisible(false)}
        >
          <View
            style={styles.modalContent}
            onStartShouldSetResponder={() => true}
          >
            {quickActions.map((item, index) => (
              <AddItemButton
                key={index}
                label={item.label}
                icon={item.icon}
                onPress={() => handleNavigation(item.route)}
              />
            ))}
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}

const AddItemButton = ({
  label,
  icon,
  onPress,
}: {
  label: string;
  icon: any;
  onPress: () => void;
}) => {
  return (
    <Pressable style={styles.addItemButtonContainer} onPress={onPress}>
      <Text style={styles.labelText}>{label}</Text>
      <View style={styles.addItemIcon}>{icon}</View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  addButton: {
    backgroundColor: "#ffd33d",
    padding: 16,
    borderRadius: 50,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "flex-end",
    alignItems: "center",
    position: "relative",
  },
  modalContent: {
    padding: 20,
    borderRadius: 10,
    width: "60%",
    alignItems: "center",
    position: "absolute",
    bottom: 80,
    right: 16,
  },
  addItemButtonContainer: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    gap: 10,
  },
  labelText: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    color: "white",
  },
  addItemIcon: {
    backgroundColor: "#1570EF",
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});
