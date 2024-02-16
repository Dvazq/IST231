import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import MenuScreen from './screens/MenuScreen';
import HomeScreen from './screens/HomeScreen';
import Colors from './constants/colors';


export default function App() {
  //set up custom fonts
  const {fontsLoaded} = useFonts ({
    "knowing-how": require("./assets/fonts/knowing-how.ttf"),

  })
  //set state variable for the current screen
  const [currentScreen, setCurrentScreen] = useState("home")
  
  function menuScreenHandler() {
    setCurrentScreen("menu");
  }
  
  function homeScreenHandler() {
    setCurrentScreen("home")
  }
  
  //determine which screen to be on
  let screen = <HomeScreen  onNext = {menuScreenHandler} />;
  
  if (currentScreen === "menu"){
    screen = <MenuScreen onNext = {homeScreenHandler}/>;
  }
    
  return (
      <>
      <StatusBar style='light'/>
      <SafeAreaProvider style= {styles.container}>{screen}</SafeAreaProvider>
      </>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.accent500,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  