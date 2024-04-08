//include all imports
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Colors from "./constants/colors";
import BookmarksScreen from "./screens/BookmarksScreen";
import USScreen from "./screens/USScreen";
import SportsScreen from "./screens/SportsScreen";
import NewsDetailScreen from "./screens/NewsDetailScreen";
import WorldScreen from "./screens/WorldScreen";
import {
  Entypo,
  MaterialIcons,
  
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useCallback } from "react";
import BookmarksContextProvider from "./store/context/bookmarks-context";

//create constants for the stack drawer and tabs
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();
//create a function for the drawernavigator
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="News"
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        headerTitleStyle: {
          fontFamily: "overpass",
          fontSize: 25,
          color: Colors.accent800,
        },
        sceneContainerStyle: {
          backgroundColor: Colors.primary300,
        },
        drawerContentStyle: { backgroundColor: Colors.primary500 },
        drawerInactiveTintColor: Colors.primary300,
        drawerActiveTintColor: Colors.accent500,
        drawerActiveBackgroundColor: Colors.primary800,
      }}
    >
      <Drawer.Screen
        name="News"
        component={TabsNavigator}
        options={{
          title: "News Listings",
          drawerLabel: "News Listings",
          drawerIcon: ({ color, size }) => (
            <Entypo name="list" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="BookmarkedListings"
        component={BookmarksScreen}
        options={{
          title: "Saved Listing",
          drawerLabel: "Saved Listings",
          drawerIcon: ({ color, size }) => (
            <Entypo name="bookmark" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
//create a function for the tabs navigator
function TabsNavigator() {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveBackgroundColor: Colors.primary800,
        tabBarActiveTintColor: Colors.accent500,
        tabBarInactiveBackgroundColor: Colors.primary500,
        tabBarInactiveTintColor: Colors.primary300,
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: "overpass",
        },
        tabBarStyle: {
          backgroundColor: Colors.primary500,
        },
      }}
    >
      <Tabs.Screen
        name="US News"
        component={USScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
          tabBarLabel: "US News",
        }}
      />
      <Tabs.Screen
        name="World News"
        component={WorldScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="apartment" size={size} color={color} />
          ),
          tabBarLabel: "World News",
        }}
      />
      <Tabs.Screen
        name="Sports News"
        component={SportsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="holiday-village" size={size} color={color} />
          ),
          tabBarLabel: "Sports News",
        }}
      />
      
    </Tabs.Navigator>
  );
}
//create the main function
export default function App() {
  //import the fonts
  const [fonstLoaded, fontError] = useFonts({
    overpass: require("./assets/fonts/overpass.ttf"),
    overpassBold: require("./assets/fonts/overpassB.ttf"),
  
  });

  const onLayoutRootView = useCallback(async () => {
    if (fonstLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  });
//check if the fonts are working
  if (!fonstLoaded && !fontError) {
    return null;
  } else {
    return (
      <>
        <StatusBar style="light" />
        <BookmarksContextProvider><NavigationContainer>
          <Stack.Navigator
            initialRouteName="DrawerScreen"
            screenOptions={{
              headerTintColor: Colors.primary300,
              headerStyle: { backgroundColor: Colors.primary500 },
              contentStyle: { backgroundColor: "black" },
            }}
          >
            <Stack.Screen
              name="DrawerScreen"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="NewsDetail"
              component={NewsDetailScreen}
              options={{
                headerBackTitleVisible: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer></BookmarksContextProvider>
       
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});