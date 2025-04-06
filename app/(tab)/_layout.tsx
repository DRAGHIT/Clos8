import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { View, StyleSheet } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarStyle: { 
          backgroundColor: 'white', 
          borderTopColor: 'black', 
          paddingBottom: 5, 
          height: 60, 
        },
      }}
    >
      <Tabs.Screen
        name="profile"
        options={{
          title: '',
          tabBarIcon: ({ color }: { color: string }) => (
            <FontAwesome size={28} name="user" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: '',
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
          title: '',
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
    width: 70,
    height: 70,
    borderRadius: 35,
    position: 'absolute',
    bottom: 10,
    left: '50%',
    transform: [{ translateX: -35 }],
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2,
  },
});