//imports
import { View, StyleSheet, FlatList } from "react-native";
import NewsItem from "./NewsItem";
//create a main function with props
function NewsList(props) {
//create a function to render each newsitem with data
  function renderNewsItem(itemData) {
//map all data
    const newsItemProps = {
      id: itemData.item.id,
      type: itemData.item.type,
      headline: itemData.item.headline,
      date: itemData.item.date,
      author: itemData.item.author,
      agency: itemData.item.agency,
      description: itemData.item.description,
      imageUrl: itemData.item.imageUrl,
    };

    return <NewsItem {...newsItemProps} />;
  }
//create a flatlist for each item
  return (
    <View style={styles.container}>
    <FlatList
      data={props.items}
      keyExtractor={(item) => item.id}
      renderItem={renderNewsItem}
      showsVerticalScrollIndicator={false}
    />
  </View>
);
}

//export function to use on other pages
export default NewsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  backgroundImage: {
    opacity: 0.4,
  },
});