import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { House, List, MessageSquareMore, Plus, UserRound } from 'lucide-react-native';
import { View } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}><MessageSquareMore size={36} />
      <Tabs.Screen
        name="home"
        options={{
          title: '홈',
          tabBarIcon: ({ color }) => <House size={24} color={color}/>,
        }}
      />
      <Tabs.Screen
        name="category"
        options={{
          title: '카테고리',
          tabBarIcon: ({ color }) => <List size={24} color={color} />,
        }}
      />
      
      <Tabs.Screen
        name="create"
        options={{
          title: "",
          tabBarIcon: () => (
            <View
              style={{
                position: "absolute",
                bottom: 0, // 살짝 위로 띄움
                height: 64,
                width: 64,
                borderRadius: 32,
                backgroundColor: "#f2a600",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Plus size={24}  />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="community"
        options={{
          title: '커뮤니티',
          tabBarIcon: ({ color }) => <MessageSquareMore size={24}  color={color} />,
        }}
      />
      <Tabs.Screen
        name="myPage"
        options={{
          title: '마이페이지',
          tabBarIcon: ({ color }) => <UserRound size={24}  color={color} />,
        }}
      />
    </Tabs>
  );
}
