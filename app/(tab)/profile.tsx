import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable, ScrollView, TouchableOpacity, ImageBackground } from "react-native";

export default function Tab() {
  const originalClothes = [
    { day: 'Monday', top: require("./assets/images/clothing/MondayTop.jpg"), bottom: require("./assets/images/clothing/MondayBot.jpg") },
    { day: 'Tuesday', top: require("./assets/images/clothing/TuesdayTop.jpg"), bottom: require("./assets/images/clothing/TuesdayBot.jpg") },
    { day: 'Wednesday', top: require("./assets/images/clothing/WednesdayTop.jpg"), bottom: require("./assets/images/clothing/WednesdayBot.jpg") },
    { day: 'Thursday', top: require("./assets/images/clothing/ThursdayTop.jpg"), bottom: require("./assets/images/clothing/ThursdayBot.jpg") },
    { day: 'Friday', top: require("./assets/images/clothing/FridayTop.jpg"), bottom: require("./assets/images/clothing/FridayBot.jpg") },
    { day: 'Saturday', top: require("./assets/images/clothing/SaturdayTop.jpg"), bottom: require("./assets/images/clothing/SaturdayBot.jpg") },
    { day: 'Sunday', top: require("./assets/images/clothing/SundayTop.jpg"), bottom: require("./assets/images/clothing/SundayBot.jpg") },
  ];

  const [weeklyClothes, setWeeklyClothes] = useState(originalClothes);

  const shuffleOutfits = () => {
    const shuffled = [...weeklyClothes].sort(() => Math.random() - 0.5);
    setWeeklyClothes(shuffled);
  };

  const resetOutfits = () => {
    setWeeklyClothes(originalClothes);
  };

  return (
    <ImageBackground
      source={require('./assets/images/peakpx.jpg')} // Add your background image here
      style={styles.background}
    >
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          {weeklyClothes.map((item, index) => (
            <View key={index} style={styles.dayContainer}>
              <Text style={styles.dayText}>{item.day}</Text>
              <View style={styles.clothesContainer}>
                <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }, styles.pressable]}>
                  <Image style={styles.image} source={item.top} />
                  <Text style={styles.clothingText}>Top</Text>
                </Pressable>
                <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }, styles.pressable]}>
                  <Image style={styles.image} source={item.bottom} />
                  <Text style={styles.clothingText}>Bottom</Text>
                </Pressable>
              </View>
            </View>
          ))}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={shuffleOutfits}>
              <Text style={styles.buttonText}>Shuffle Outfits</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={resetOutfits}>
              <Text style={styles.buttonText}>Reset Outfits</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  dayContainer: {
    marginBottom: 20,
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  dayText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'teal',
    marginBottom: 10,
    textAlign: 'center',
  },
  clothesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  pressable: {
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 5,
  },
  clothingText: {
    color: 'teal',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: 'teal',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});