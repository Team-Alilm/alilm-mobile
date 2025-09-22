import { useRouter } from 'expo-router';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';

export default function WebViewScreen() {
  const router = useRouter();
  return (

    <SafeAreaView
      style={{ flex: 1 }}
    >
      <WebView
        source={{ uri: 'https://www.algamja.com/?tab=home' }}
      />
      {/* <FAB onPress={()=>{
        router.navigate('/(tabs)/community')
      }}><Text>Mobile</Text></FAB> */}
    </SafeAreaView>
  );
}
