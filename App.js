import { useState } from 'react'
import Home from './screens/home'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'

 const getFonts = () => console.log('ddd')

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  if(fontsLoaded){
    return (
      <Home />
    );
  } else {
    return (
      <AppLoading 
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    )
  }
}

