import {
  View,
  Text,
  StyleSheet,
  Switch,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { BaseLayout } from "../components/ui/containers";
import { Image } from "expo-image";
import { PrimaryButton } from "../components/ui/button";
import { AntDesign } from "@expo/vector-icons";

export default function Notifications() {
  const [noNotification, setNoNotification] = useState(true);
  const [showUnreadOnly, setShowUnreadOnly] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, markedAsRead: true },
    { id: 2, markedAsRead: false },
    { id: 3, markedAsRead: false },
    { id: 4, markedAsRead: true },
    { id: 5, markedAsRead: true },
    { id: 6, markedAsRead: true },
  ]);

  const markNotificationAsRead = (id: number) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notif) =>
        notif.id === id ? { ...notif, markedAsRead: true } : notif
      )
    );
  };

  // Toggle all notifications as read
  const markAllAsRead = () => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notif) => ({ ...notif, markedAsRead: true }))
    );
  };

  return (
    <BaseLayout>
      <Text style={{ fontSize: 20, fontWeight: "600" }}>Notifications</Text>
      {noNotification ? (
        <View style={styles.container}>
          <Image
            source={require("../../assets/images/notifications/empty-notification.png")}
            placeholder={"Empty Notification"}
            contentFit="cover"
            style={styles.emptyImage}
          />
          <View>
            <Text style={{ fontSize: 16, textAlign: "center" }}>
              No notifications yet!
            </Text>
            <Text style={{ fontSize: 16 }}>Check back later for updates.</Text>
          </View>
          <PrimaryButton onPress={() => setNoNotification(!noNotification)}>
            Refresh
          </PrimaryButton>
        </View>
      ) : (
        <View>
          {/* Top section */}
          <View style={styles.topSection}>
            <View style={styles.switchContainer}>
              <Switch
                value={showUnreadOnly}
                onValueChange={() => setShowUnreadOnly(!showUnreadOnly)}
                thumbColor={showUnreadOnly ? "#fff" : ""}
                trackColor={{ false: "#767577", true: "#1570EF" }}
                style={{ transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }] }}
              />
              <Text style={{ fontWeight: "600" }}>Unread only</Text>
            </View>
            <TouchableOpacity onPress={markAllAsRead}>
              <Text style={styles.markAllButton}>Mark all as read</Text>
            </TouchableOpacity>
          </View>

          {/* Notification cards */}
          <ScrollView style={{ marginTop: 16 }}>
            {notifications
              .filter((notif) => !showUnreadOnly || !notif.markedAsRead)
              .map((notif) => (
                <NotificationCard
                  key={notif.id}
                  markedAsRead={notif.markedAsRead}
                  onMarkAsRead={() => markNotificationAsRead(notif.id)}
                />
              ))}
          </ScrollView>
        </View>
      )}
    </BaseLayout>
  );
}

const NotificationCard = ({
  markedAsRead,
  onMarkAsRead,
}: {
  markedAsRead: boolean;
  onMarkAsRead: () => void;
}) => {
  return (
    <View
      style={[
        notificationCardStyles.container,
        !markedAsRead && notificationCardStyles.unreadBackground,
      ]}
    >
      <View style={notificationCardStyles.iconContainer}>
        <AntDesign name="bells" size={18} />
      </View>
      <View style={notificationCardStyles.textContainer}>
        <Text>Budget Alert</Text>
        <Text style={notificationCardStyles.message}>
          You’ve spent 80% of your Groceries Budget. Is this really how you want
          to continue spending?
        </Text>
        <View style={notificationCardStyles.footer}>
          <Text style={notificationCardStyles.timestamp}>
            Jan 15, 2025 at 10:00am
          </Text>
          {/* {!markedAsRead && (
            <TouchableOpacity
              onPress={onMarkAsRead}
              style={notificationCardStyles.markAsReadButton}
            >
              <Text style={notificationCardStyles.markAsReadText}>
                Mark as read
              </Text>
            </TouchableOpacity>
          )} */}
        </View>
      </View>
    </View>
  );
};

const notificationCardStyles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    marginVertical: 4,
    padding: 16,
    borderWidth: 1,
    borderColor: "#f1f1f1",
  },
  unreadBackground: {
    backgroundColor: "#E5E7EB", // Equivalent to Tailwind bg-gray-200
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#FFEDD5",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    marginLeft: 8,
    flex: 1,
  },
  message: {
    color: "#6B7280",
    marginBottom: 8,
  },
  footer: {
    alignItems: "flex-end",
  },
  timestamp: {
    fontSize: 10,
    color: "#6B7280",
  },
  markAsReadButton: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: "#1570EF",
    borderRadius: 4,
  },
  markAsReadText: {
    color: "#fff",
    fontSize: 12,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  emptyImage: {
    width: 175,
    height: 175,
    resizeMode: "contain",
  },
  topSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  markAllButton: {
    color: "#1570EF",
    fontWeight: "600",
  },
});
