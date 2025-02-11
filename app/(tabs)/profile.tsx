import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Pressable,
  Linking,
  Text,
  Switch,
} from "react-native";
import { BaseLayout } from "../components/ui/containers";
import { AntDesign } from "@expo/vector-icons";
import { Image } from "expo-image";

interface SettingRow {
  icon: keyof typeof AntDesign.glyphMap;
  title: string;
  rightComponent?: React.ReactNode;
  onPress?: () => void;
}

const ProfileScreen = () => {
  const [isPushNotificationsOn, setIsPushNotificationsOn] = useState(false);

  const openWhatsApp = () => {
    const phoneNumber = "+1234567890";
    const url = `https://wa.me/${phoneNumber}`;
    Linking.openURL(url).catch(() => {
      console.log("Could not open WhatsApp");
    });
  };

  const settings: SettingRow[] = [
    {
      icon: "Trophy",
      title: "Currency settings",
    },
    {
      icon: "bells",
      title: "Push notifications",
      rightComponent: (
        <Switch
          value={isPushNotificationsOn}
          onValueChange={() => setIsPushNotificationsOn(!isPushNotificationsOn)}
          thumbColor={isPushNotificationsOn ? "#fff" : ""}
          trackColor={{ false: "#767577", true: "#1570EF" }}
          style={{
            transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }],
          }}
        />
      ),
    },
    {
      icon: "circledown",
      title: "Support",
      onPress: openWhatsApp,
    },
  ];

  return (
    <BaseLayout>
      <View style={styles.profileSection}>
        <View style={styles.avatarContainer}>
          <Image
            source={{ uri: "https://picsum.photos/seed/696/3000/2000" }}
            style={styles.userIcon}
            placeholder={"asdan"}
            contentFit="cover"
          />
          <View style={styles.editIcon}>
            <AntDesign name="edit" size={16} />
          </View>
        </View>
        <Text>Sandra</Text>
        <Text style={styles.emailText}>sandra@gmail.com</Text>
      </View>

      <View style={styles.settingsContainer}>
        {settings.map((item, index) => (
          <SettingsRow
            key={index}
            icon={item.icon}
            title={item.title}
            rightComponent={item.rightComponent}
            onPress={item.onPress}
          />
        ))}

        <Pressable style={styles.logoutButton}>
          <AntDesign name="lock" size={18} color={"#D92D20"} />
          <Text style={styles.logoutText}>Logout</Text>
        </Pressable>
      </View>
    </BaseLayout>
  );
};

export default ProfileScreen;

// Settings Row Component
const SettingsRow = ({
  icon,
  title,
  rightComponent = null,
  onPress,
}: {
  icon: any;
  title: string;
  rightComponent?: any;
  onPress?: () => void;
}) => (
  <Pressable onPress={onPress} style={styles.settingsRow}>
    <View style={styles.rowContent}>
      <AntDesign name={icon} size={18} />
      <Text>{title}</Text>
    </View>
    {rightComponent}
  </Pressable>
);

const styles = StyleSheet.create({
  profileSection: {
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarContainer: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: "#BFDBFE",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  userIcon: {
    width: "100%",
    height: "100%",
    borderRadius: 40,
    resizeMode: "cover",
  },
  editIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "white",
    padding: 4,
    borderRadius: 8,
  },
  emailText: {
    color: "#9CA3AF",
  },
  settingsContainer: {
    marginTop: 32,
    gap: 24,
  },
  settingsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rowContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  logoutText: {
    color: "#D92D20",
  },
});
