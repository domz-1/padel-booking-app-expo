import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { ViewStyle, Animated } from 'react-native';

export default function MainLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        headerStyle: {
          backgroundColor: '#FFFFFF',
        },
        headerTintColor: '#000000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        tabBarStyle: (() => {
          const routeName = route.name;
          if (routeName.includes('[') || !routeName.endsWith('index') || routeName.includes('subpage')) {
            return { display: 'none' } as ViewStyle;
          }
          return {
            backgroundColor: '#009E20',
            borderTopWidth: 0,
            height: 76,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            elevation: 8,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: -4,
            },
            shadowOpacity: 0.1,
            shadowRadius: 8,
          } as ViewStyle;
        })(),
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.8)',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
          marginTop: 4,
        },
        tabBarIconStyle: {
          marginTop: 4,
        },
        tabBarItemStyle: {
          paddingTop: 8,
        },
        tabBarIcon: ({ color, size, focused }) => {
          const iconSize = focused ? 30 : 26;
          return (
            <Animated.View
              style={{
                transform: [{ scale: focused ? 1.1 : 1 }],
              }}
            >
              <Ionicons 
                name={getIconName(route.name, focused)}
                size={iconSize} 
                color={color} 
                style={{ opacity: focused ? 1 : 0.8 }}
              />
            </Animated.View>
          );
        },
      })}
    >
      <Tabs.Screen
        name="home/index"
        options={{
          title: 'Home',
          tabBarLabel: 'Home',
        }}
      />
      <Tabs.Screen
        name="slots/index"
        options={{
          title: 'Slots',
        }}
      />
      <Tabs.Screen
        name="explore/index"
        options={{
          title: 'Explore',
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          title: 'Profile',
        }}
      />
      <Tabs.Screen
        name="admin-tools/index"
        options={{
          title: 'Admin',
        }}
      />
    </Tabs>
  );
}

function getIconName(routeName: string, focused: boolean) {
  switch (routeName) {
    case 'home/index':
      return focused ? 'home' : 'home-outline';
    case 'slots/index':
      return focused ? 'calendar' : 'calendar-outline';
    case 'explore/index':
      return focused ? 'compass' : 'compass-outline';
    case 'profile/index':
      return focused ? 'person' : 'person-outline';
    case 'admin-tools/index':
      return focused ? 'settings' : 'settings-outline';
    default:
      return 'help-outline';
  }
}