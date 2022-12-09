import React, { useCallback, useEffect } from "react";
import Index from "./src/navigation";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';


SplashScreen.preventAutoHideAsync();
export default function App() {
  const [fontsLoaded] = useFonts({
    'BasisGrotec': require('./assets/fonts/BasisGrotec.ttf')
  });
  if (!fontsLoaded) {
    return null;
  }else{
    SplashScreen.hideAsync()
  }
 
  return <Index/>;
}
