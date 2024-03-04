import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React, {useState, useMemo} from "react";
import Colors from './constants/colors';
import HomeScreen from './screens/HomeScreen';
import OrderReviewScreen from './screens/OrderReviewScreen';
import { useFonts } from 'expo-font';

export default function App() {
  const {fontsLoaded} = useFonts ({
    "bebasNeue": require("./assets/fonts/BebasNeue-Regular.ttf"),

  })

  const [currentScreen, setCurrentScreen] = useState("");
  const [currentPrice, setCurrentPrice] = useState(0);
  
  const serviceTimeRadioButtons = useMemo(
    () => [
      {
        id: "0",
        label: "Standard",
        value: "Standard",
        price: 0,
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
      {
        id: "2",
        label: "Expedited",
        value: "Expedited",
        price: 50,
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
      {
        id: "3",
        label: "Next Day",
        value: "Next Day",
        price: 100,
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
    ],
    []
  );
  const [serviceTimesId, setserviceTimesId] = useState(0);
  const [serviceOptions, setServiceOptions] = useState([
    { id: 0, name: "Basic Tune-Up", value: false, price: 50 },
    { id: 1, name: "Comprehensive Tune-Up", value: false, price: 75 },
    { id: 2, name: "Flat Tire Repair", value: false, price: 20 },
    { id: 3, name: "Brake Servicing", value: false, price: 50 },
    { id: 4, name: "Gear Servicing", value: false, price: 40 },
    { id: 5, name: "Chain Servicing", value: false, price: 15 },
    { id: 6, name: "Safety Check", value: false, price: 25 },
    { id: 7, name: "Accessory Install", value: false, price: 10 },
  
  ]);

  const [newsLetter, setnewsLetter] = useState(false);
  const [membershipSignup, setMembershipSignup] = useState(false);
 
  function setNewsLetterHandler(){
    setnewsLetter((previous) => ! previous)
  }
  
  function setMembershipSignupHandler(){
    setMembershipSignup((previous) => ! previous)
  }
  function homeScreenHandler() {
    setCurrentPrice(0);
    setCurrentScreen("home");
  }
  function setServiceOptionsHandler(id) {
    setServiceOptions((prevOption) =>
    prevOption.map((item) =>
      item.id === id? { ...item, value: item.value} :item
    
    )  
    );
  
}
function orderReviewHandler() {
  let price = 0;
  for (let i = 0; i < serviceOptions.length; i++) {
    if (serviceOptions[i].value){
      price = price + serviceOptions[i].price;
    }
  }
  if (newsLetter) {
    price = price + 0;
  }
  if (membershipSignup) {
    price = price + 100;
  }
 
  price = price + serviceTimeRadioButtons[serviceTimesId].price;
  
  setCurrentPrice(price);
  setCurrentScreen("review");
}
  let screen = ( <HomeScreen
    serviceTimesId={serviceTimesId}
    onSetserviceTimesId = {setserviceTimesId}
    serviceOptions ={serviceOptions}
    onSetServiceOptions ={setServiceOptionsHandler}
    serviceTimeRadioButtons={serviceTimeRadioButtons}
    newsLetter = {newsLetter}
    onSetnewsLetter ={setNewsLetterHandler}
    membershipSignup = {membershipSignup}
    onSetmembershipSignup ={setMembershipSignupHandler}
    onNext = {orderReviewHandler}
  
    />
    );
  
    if (currentScreen == "review") {
      screen = (<OrderReviewScreen 
      servicetime ={serviceTimeRadioButtons[serviceTimesId].value}
      
      serviceOptions ={serviceOptions}
      
      newsLetter = {newsLetter}
      membershipSignup = {membershipSignup}
      
      price = {currentPrice}
      onNext = {homeScreenHandler}
      />)
    }

  return (
    <>
    <StatusBar style='light'/>
    <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
    
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
