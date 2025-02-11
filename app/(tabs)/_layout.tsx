import React, { useState } from "react";
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
import { Pressable, View } from "react-native";
import AddActionSheet from "./addScreen";

export default function TabLayout() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#6663FD",
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "home-sharp" : "home-outline"}
                color={color}
                size={24}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="addScreen"
          options={{
            title: "Add Sheet",
            tabBarButton: (props) => (
              <Pressable
                {...props}
                onPress={() => setModalVisible(true)}
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    padding: 4,
                    backgroundColor: "#1570EF",
                    borderRadius: 50,
                  }}
                >
                  <Entypo name="plus" size={32} color={"white"} />
                </View>
              </Pressable>
            ),
          }}
          listeners={{
            tabPress: (e) => {
              e.preventDefault();
              setModalVisible(true);
            },
          }}
        />

        <Tabs.Screen
          name="goals"
          options={{
            title: "",
            tabBarIcon: ({ color, focused }) => (
              <Feather name="pie-chart" color={color} size={24} />
            ),
          }}
        />

        <Tabs.Screen
          name="(expense)"
          options={{
            href: null,
            title: "Expense",
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            href: null,
            title: "Profile",
          }}
        />

        <Tabs.Screen
          name="notifications"
          options={{
            href: null,
            // title: "Notifications",
          }}
        />
      </Tabs>

      <AddActionSheet
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </>
  );
}
