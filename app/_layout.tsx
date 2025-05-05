import { SplashScreen, Stack } from "expo-router";

import { GlobalProvider } from "@/lib/global-proveider";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import "./global.css";


export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Rubik-ExtraBold": require('../assets/fonts/Rubik-ExtraBold.ttf'),
    "Rubik-Bold": require('../assets/fonts/Rubik-Bold.ttf'),
    "Rubik-SemiBold": require('../assets/fonts/Rubik-SemiBold.ttf'),
    "Rubik-Medium": require('../assets/fonts/Rubik-Medium.ttf'),
    "Rubik-Regular": require('../assets/fonts/Rubik-Regular.ttf'),
    "Rubik-Light": require('../assets/fonts/Rubik-Light.ttf')
  })

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  },[fontsLoaded]);

  if(!fontsLoaded) return null;

  return (
    <GlobalProvider>
      <Stack screenOptions={{ headerShown: false }}/>
    </GlobalProvider>
  );
}
