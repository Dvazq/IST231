//imports
import { Text, StyleSheet, View } from "react-native";
import NewsList from "../components/NewsList";
import { NEWSLISTINGS } from "../data/dummy_data";
//create a function for worldscreen
function WorldScreen(props) {
  //search for world
  const type = "World";

  const displayedListings = NEWSLISTINGS.filter((newsItem) => {
    return newsItem.type === type;
  });

  return <NewsList items={displayedListings} />;
}
//export to use on other pages
export default WorldScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
});