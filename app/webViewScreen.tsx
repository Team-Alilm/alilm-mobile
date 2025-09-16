import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';
import styled from 'styled-components';


const FAB = styled(Pressable)`
  border: none;
  outline: none;
  position: absolute;
  bottom: 50px;
  right: 10px;
  z-index: 999;
  
  justify-content: center;
  align-items: center;
  background-color: #EDA600;
  width: 50px;
  height: 50px;
  border-radius: 100%;
`;

export default function WebViewScreen() {
  const router = useRouter();
  return (

    <SafeAreaView
      style={{ flex: 1 }}
    >
      <WebView
        source={{ uri: 'https://www.algamja.com/?tab=home' }}
      />
      <FAB onPress={()=>{
        router.navigate('/(tabs)/community')
      }}><Text>Mobile</Text></FAB>
    </SafeAreaView>
  );
}
