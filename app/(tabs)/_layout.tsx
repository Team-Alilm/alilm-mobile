import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, Pressable } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { House, List, MessageSquareMore, Plus, UserRound } from 'lucide-react-native';
import { View } from 'react-native';
import styled from 'styled-components';


export const ButtonContainer = styled(Pressable).attrs<BottomTabBarButtonProps>(
  (props) => ({
    ...props,
    android_ripple:null
  })
)`
  top: -30px;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: box-none;
`;

export const Button = styled(View)`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background-color: orange;
  justify-content: center;
  align-items: center;
  /* elevation: 5; */
`;

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
      }}>
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
          title: '',
          tabBarButton :(props:BottomTabBarButtonProps)=> (
              <ButtonContainer {...props} >
                <Button>
                  <Plus size={24} color="white" />
                </Button>
              </ButtonContainer>
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
