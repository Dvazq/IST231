//imports
import { Text, StyleSheet, View } from "react-native";
import NewsList from "../components/NewsList";
import { NEWSLISTINGS } from "../data/dummy_data";
//create a function for the sports screen
function SportsScreen(props) {
  //search for sports type in newslisting
  const type = "Sports";

  const displayedListings = NEWSLISTINGS.filter((newsItem) => {
    return newsItem.type === type;
  });

  return <NewsList items={displayedListings} />;
}
//export to use screen on other pages
export default SportsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
});