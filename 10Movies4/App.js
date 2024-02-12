import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";


import MovieItems from './components/MovieItems';

export default function App() {
  
const [movieItems, setmovieItems] = useState([
  {
    name: "10.)  Drive",
    image: require("./assets/images/drive.jpg"),
    rating: "8",
  },
  {
    name: "9.)   The Suicide Squad",
    image: require("./assets/images/ssquad.jpg"),
    rating: "8",
  },
  {
    name: "8.) John Wick 4",
    image: require("./assets/images/john4.jpg"),
    rating: "8",
  },
  
  {
    name: "7.)  The Batman",
    image: require("./assets/images/batman.jpg"),
    rating: "8.25",
  },
  {
    name: "6.)  Spider-man Accross the Spider-Verse",
    image: require("./assets/images/acrossspider.jpg"),
    rating: "8.5",
  },
  {
    name: "5.)  SuperBad",
    image: require("./assets/images/superbad.jpg"),
    rating: "8.5",
  },
  {
    name: "4.)  The Dark Knight",
    image: require("./assets/images/darkknight.jpg"),
    rating: "9",
  },
  {
    name: "3.)  Spider-man into the Spider-Verse",
    image: require("./assets/images/intospider.jpg"),
    rating: "9.5",
  },
  {
    name: "2.) The Matrix",
    image: require("./assets/images/matrix.jpg"),
    rating: "9.5",
  },
  {
    name: "1.) Creed",
    image: require("./assets/images/creed.jpg"),
    rating: "10",
  },
]);
  return (
    <>
    <StatusBar style='dark' />
    <SafeAreaView style= {styles.rootContainer}>
  <View style= {styles.titleContainer}>
    <Text style= {styles.title}>
      Top 10 Movies
      </Text>
  </View>
  
  <View style= {styles.listContainer}>
  <ScrollView style = {{height: '60%'}}>
  {movieItems.map((itemData) => (
    <MovieItems
    name= {itemData.name}
    image= {itemData.image}
    rating= {itemData.rating}
    />
  ))}
  </ScrollView>
  </View>
    </SafeAreaView>
    </>
  );
}


const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#2123fa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 20,
    paddingHorizontal: 5,
    borderWidth: 5,
    borderRadius: 10
  },
  title: {
    fontSize: 35,
    fontWeight: "bold"
  },
  listContainer: {
    flex: 8,
    width: "90%",
  }
});
