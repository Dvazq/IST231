
//imports
import { Text, StyleSheet, View } from "react-native";
import NewsList from "../components/NewsList";
import { NEWSLISTINGS } from "../data/dummy_data";
//create a function for the us news screen
function USScreen(props) {
  //search for the type usa
  const type = "USA";

  const displayedListings = NEWSLISTINGS.filter((newsItem) => {
    return newsItem.type === type;
  });

  return <NewsList items={displayedListings} />;
}
//export to use function on other pages
export default USScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
});