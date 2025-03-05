import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { View, StyleSheet } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'grey',
        headerShown: false,
        tabBarStyle: { 
          backgroundColor: 'white', 
          borderTopColor: 'grey', 
          paddingBottom: 5, 
          height: 60, 
        },
      }}
    >
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Clos8',
          tabBarIcon: ({ color }: { color: string }) => (
            <FontAwesome size={28} name="user" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Camera',
          tabBarIcon: ({ color }: { color: string }) => (
            <View style={styles.cameraIconContainer}>
              <FontAwesome size={28} name="camera-retro" color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'About',
          tabBarIcon: ({ color }: { color: string }) => (
            <FontAwesome size={28} name="info-circle" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  cameraIconContainer: {
    backgroundColor: 'white',
    width: 50,
    height: 50,
    borderRadius: 30,
    bottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'grey',
    borderWidth: 2,
  },
});