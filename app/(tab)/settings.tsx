import { View, Text, StyleSheet } from 'react-native';

export default function Tab() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Clos8</Text>
      <Text style={styles.description}>
        Clos8 is an AI-powered outfit planner designed to simplify your wardrobe choices. By analyzing your preferences, style, and weather conditions, it curates personalized outfit recommendations. Whether you're looking to optimize your daily looks or plan ahead for events, Clos8 helps you stay stylish and organized, making getting dressed effortless and fun.
      </Text>
      <Text style={styles.authors}>By Sidhant Singh, Aditya Gosain, Aditeey Singh, and Aditya Prasad</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'teal',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  authors: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});