import { View, Text, StyleSheet, Image, Pressable } from "react-native";

export default function Tab() {
  return (
    <View style={styles.container}>
      <Text style={styles.instructionText}>
        Click on the camera to upload your pictures so the AI can create your outfit plan.
      </Text>
      <Pressable
        style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }, styles.pressable]}
      >
        <Image style={styles.image} source={require("./assets/images/closet-icon-style-vector.jpg")}/>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "teal",
    padding: 20,
  },
  instructionText: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    marginBottom: 100,
  },
  pressable: {
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
  },
});