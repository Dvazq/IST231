//imports
import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import { BookmarksContext } from "../store/context/bookmarks-context";
import { NEWSLISTINGS } from "../data/dummy_data";
import NewsList from "../components/NewsList";
import NewsItem from "../components/NewsItem";

function BookmarksScreen (){
  const bookmarkedNewsCtx = useContext(BookmarksContext);

  const bookmarkedNews = NEWSLISTINGS.filter((newsItem) => {
    return bookmarkedNewsCtx.ids.includes(newsItem.id);
  });
  if (bookmarkedNews.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no saved news yet</Text>
      </View>
    );
  } else {
    return <NewsList items={bookmarkedNews} />;
  }
}

//export function the page is not fully operational yet
export default BookmarksScreen;


const styles = StyleSheet.create({
  rootContainer:{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
  },
  text: {
      fontSize: 24,
      fontWeight: "bold",
      color: "black",
      fontFamily: "overpass",
      fontStyle:"italic"
  },
});