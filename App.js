import { useState } from 'react'
import Home from './screens/home'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'

export default function App() {

  let [fontsLoaded] = useFonts({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Home />
  );
}

