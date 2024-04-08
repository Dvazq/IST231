//Imports
import { Text, StyleSheet, View, Image, ScrollView } from "react-native";
import { useLayoutEffect, useState, useContext } from "react";
import BookmarkButton from "../components/BookmarkButton";
import { NEWSLISTINGS } from "../data/dummy_data";
import { BookmarksContext } from "../store/context/bookmarks-context";
//create a main function
function NewsDetailScreen(props) {
  //create a two constants one for each selected listing and for the news id
  const NewsId = props.route.params.NewsId;
  const selectedListing = NEWSLISTINGS.find((listing) => listing.id === NewsId);
  const bookmarkedListingsCtx = useContext(BookmarksContext)
  const [pressed, setPressed] = useState(false);
  //create a function for header button press
const listingisBookmarked = bookmarkedListingsCtx.ids.includes(NewsId)

function changeBookmarkStatusHandler(){
  if (listingisBookmarked){
    bookmarkedListingsCtx.removeFavorite(NewsId);
  } else {
    bookmarkedListingsCtx.addFavorite(NewsId);
  }
}
//add a bookmark button
  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: "",
      headerRight: () => {
        return (
          <BookmarkButton
            pressed={listingisBookmarked}
            onPress={changeBookmarkStatusHandler}
          />
        );
      },
    });
  }, [props.navigation, changeBookmarkStatusHandler]);
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
          <Text>Author:</Text>
          <Text style={styles.author}>{selectedListing.author}</Text>

          <View style={styles.rowContainer}>
            <View>
          <Text>Date:</Text>
            </View>
            <View>
            <Text style={styles.rowItem}>{selectedListing.date}</Text>
            </View>
            </View>
            <View>
            <Text>Agency:</Text>
            <Text style={styles.rowItem}>{selectedListing.agency}</Text>
          </View>
          <View>
          <View><Text>Description:</Text></View>
          <Text style={styles.description}>{selectedListing.description}</Text>
        </View>
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
    backgroundColor:"white"
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
    fontFamily:"overpassBold",
    fontWeight:"bold"
  },
  author: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily:"overpassBold",

  },
  rowContainer: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "overpassBold",
  },
  rowItem: {
    fontSize: 18,
    marginVertical: 10,

    fontFamily:"overpass",
  },
  description: {
    fontSize: 16,
    marginBottom:15,
    fontFamily:"overpass",
  },
});