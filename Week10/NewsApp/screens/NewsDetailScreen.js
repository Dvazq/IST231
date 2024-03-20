//Imports
import { Text, StyleSheet, View, Image, ScrollView } from "react-native";
import { useLayoutEffect, useState } from "react";
import BookmarkButton from "../components/BookmarkButton";
import { NEWSLISTINGS } from "../data/dummy_data";
//create a main function
function NewsDetailScreen(props) {
  //create a two constants one for each selected listing and for the news id
  const NewsId = props.route.params.NewsId;
  const selectedListing = NEWSLISTINGS.find((listing) => listing.id === NewsId);

  const [pressed, setPressed] = useState(false);
  //create a function for header button press
  function headerButtonPressHandler() {
    setPressed(!pressed);
  }
//add a bookmark button
  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: "",
      headerRight: () => {
        return (
          <BookmarkButton
            pressed={pressed}
            onPress={headerButtonPressHandler}
          />
        );
      },
    });
  }, [props.navigation, headerButtonPressHandler]);
//create each news detail and style each of them
  return (
    <View style={styles.rootContainer}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: selectedListing.imageUrl }}
          />
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.headline}>{selectedListing.headline}</Text>
          <Text style={styles.author}>{selectedListing.author}</Text>

          <View style={styles.rowContainer}>
            <Text style={styles.rowItem}>{selectedListing.date}</Text>
            <Text style={styles.rowItem}>{selectedListing.agency}</Text>
          </View>
          <Text style={styles.description}>{selectedListing.description}</Text>
        </View>
        </ScrollView>
    </View>
  );
}
//export main function to use on other pages
export default NewsDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  imageContainer: {
    marginVertical: 15,
    height: 250,
    width: "95%",
    alignSelf: "center",
    borderWidth: 5,
  },
  image: {
    height: "100%",
    resizeMode: "cover",
  },
  infoContainer: {
    alignSelf: "center",
    marginVertical: 5,
    marginBottom:15,
    paddingHorizontal:15,
    width: "90%",
    borderWidth: 5,
  },
  headline: {
    fontSize: 24,
    marginVertical: 15,
    textAlign: "center",
    fontFamily:"overpassB",
  },
  author: {
    fontSize: 20,
    marginVertical: 10,
    textAlign: "center",
    fontFamily:"overpassB",

  },
  rowContainer: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "overpassB",
  },
  rowItem: {
    fontSize: 18,
    fontFamily:"overpass",
  },
  description: {
    fontSize: 16,
    alignSelf: "center",
    marginBottom:15,
    fontFamily:"overpass",
  },
});