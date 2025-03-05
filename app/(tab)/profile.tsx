import { View, Text, StyleSheet, Image, Pressable, ScrollView } from "react-native";

export default function Tab() {
  const weeklyClothes = [
    { day: 'Monday', top: require("./assets/images/clothing/MondayTop.jpg"), bottom: require("./assets/images/clothing  /MondayBot.jpg") },
    { day: 'Tuesday', top: require("./assets/images/clothing/TuesdayTop.jpg"), bottom: require("./assets/images/clothing/TuesdayBot.jpg") },
    { day: 'Wednesday', top: require("./assets/images/clothing/WednesdayTop.jpg"), bottom: require("./assets/images/clothing/WednesdayBot.jpg") },
    { day: 'Thursday', top: require("./assets/images/clothing/ThursdayTop.jpg"), bottom: require("./assets/images/clothing/ThursdayBot.jpg") },
    { day: 'Friday', top: require("./assets/images/clothing/FridayTop.jpg"), bottom: require("./assets/images/clothing/FridayBot.jpg") },
    { day: 'Saturday', top: require("./assets/images/clothing/SaturdayTop.jpg"), bottom: require("./assets/images/clothing/SaturdayBot.jpg") },
    { day: 'Sunday', top: require("./assets/images/clothing/SundayTop.jpg"), bottom: require("./assets/images/clothing/SundayBot.jpg") },
  ];

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        {weeklyClothes.map((item, index) => (
          <View key={index} style={styles.dayContainer}>
            <Text style={styles.dayText}>{item.day}</Text>
            <View style={styles.clothesContainer}>
              <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}>
                <Image style={styles.image} source={item.top} />
                <Text style={styles.clothingText}>Top</Text>
              </Pressable>
              <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}>
                <Image style={styles.image} source={item.bottom} />
                <Text style={styles.clothingText}>Bottom</Text>
              </Pressable>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "dimgrey",
  },
  container: {
    flex: 1,
    padding: 16,
  },
  dayContainer: {
    marginBottom: 20,
    backgroundColor: '#404040',
    padding: 16,
    borderRadius: 8,
  },
  dayText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  clothesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  clothingText: {
    color: 'white',
    textAlign: 'center',
    marginTop: 5,
  },
});