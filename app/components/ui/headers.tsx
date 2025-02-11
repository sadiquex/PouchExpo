import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Entypo } from "@expo/vector-icons";
import { Link, router, useRouter } from "expo-router";

interface ScreenHeaderProps {
  title: string;
  iconType?: "plus" | "dots";
  showBack?: boolean;
  onIconPress?: () => void;
}

export function HomeHeader() {
  const router = useRouter();

  return (
    <View style={homepageHeaderStyles.container}>
      <View style={homepageHeaderStyles.leftSide}>
        <Pressable onPress={() => router.push("../../(tabs)/profile")}>
          <Image
            style={homepageHeaderStyles.image}
            source="https://picsum.photos/seed/696/3000/2000"
            placeholder={"asdan"}
            contentFit="cover"
            // transition={1000}
          />
        </Pressable>

        <View>
          <Text style={homepageHeaderStyles.greeting}>Welcome back</Text>
          <Text style={homepageHeaderStyles.userName}>Sandra</Text>
        </View>
      </View>

      <View style={homepageHeaderStyles.iconContainer}>
        <AntDesign name="gift" size={24} style={homepageHeaderStyles.icon} />
        <Link href={"../../(tabs)/notifications"} asChild>
          <MaterialIcons
            name="notifications-on"
            size={24}
            style={homepageHeaderStyles.icon}
          />
        </Link>
      </View>
    </View>
  );
}

export function ScreenHeader({
  title,
  iconType,
  showBack,
  onIconPress,
}: ScreenHeaderProps) {
  return (
    <View style={screenHeaderStyles.container}>
      {showBack && (
        <Pressable
          onPress={() => router.back()}
          style={screenHeaderStyles.iconButton}
        >
          <Entypo name="chevron-left" size={24} color="black" />
        </Pressable>
      )}

      <Text
        style={[
          screenHeaderStyles.title,
          {
            textAlign: showBack ? "center" : "left",
            marginLeft: showBack ? 0 : 16,
          },
        ]}
      >
        {title}
      </Text>

      {iconType && (
        <Pressable onPress={onIconPress} style={screenHeaderStyles.iconButton}>
          {iconType === "plus" ? (
            <MaterialIcons name="add" size={24} color="black" />
          ) : (
            <Entypo name="dots-three-vertical" size={20} color="black" />
          )}
        </Pressable>
      )}
    </View>
  );
}

const homepageHeaderStyles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    // color: "#fff",
    fontSize: 20,
  },
  leftSide: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    // backgroundColor: "red",
  },
  greeting: {
    fontSize: 12,
    // color: "#fff",
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  iconContainer: {
    flexDirection: "row",
    gap: 4,
  },
  icon: {
    borderRadius: 6,
    padding: 8,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});

const screenHeaderStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1F2937",
    flex: 1,
    textAlign: "center",
  },
  iconButton: {
    padding: 8,
  },
});
