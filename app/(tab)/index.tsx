import { View, Text, StyleSheet, Image, Pressable } from "react-native";

export default function Tab() {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
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
    backgroundColor: "dimgrey",
  },
  image: {
    width: 100,
    height: 100,
  },
});
