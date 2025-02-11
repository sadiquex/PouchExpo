import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login screen</Text>
      <Link href={"/(tabs)"} style={styles.button}>
        Go back to Home screen!
      </Link>
      <View
        style={{
          padding: 20,
          backgroundColor: "#fff",
          marginVertical: 12,
        }}
      >
        <Text style={{ color: "#000" }}>Fill the form to login</Text>
      </View>
      <Link href={"/(auth)/register"} style={styles.button}>
        Register
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});
