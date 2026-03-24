import { authGroup } from "./src/api";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>effect/unstable/httpapi repro</Text>
        <Text style={styles.body}>
          If Metro can bundle this app, the import resolved.
        </Text>
        <Text style={styles.body}>
          Group identifier: {authGroup.identifier}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f6f2e9",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    gap: 12,
    backgroundColor: "#f6f2e9",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#2a221d",
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
    color: "#554941",
  },
});
