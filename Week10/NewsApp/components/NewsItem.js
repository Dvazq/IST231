//import use navigation and colors
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Colors from "../constants/colors";
//create main function
function NewsItem(props) {
  const navigation = useNavigation();
//create function to navigate to newsdetail
  function selectedNewsHandler() {
    navigation.navigate("NewsDetail", {
      NewsId: props.id,
    });
  }
//configure each news item to when clicked show the image url
  return (
    <View style={styles.itemContainer}>
      <Pressable onPress={selectedNewsHandler}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: props.imageUrl }} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.headline}>{props.headline}</Text>
          <Text style={styles.articleReleased}>{props.date}</Text>
        </View>
      </Pressable>
    </View>
  );
}
//export to use on other pages
export default NewsItem;

const styles = StyleSheet.create({
  itemContainer: {
    padding:10, 
    marginBottom: 20,
    borderRadius: 7,
    borderWidth:5,
    borderRadius:4,
    borderColor: Colors.secondary800,
    backgroundColor: Colors.primary500,
  },
  button: {
    flex: 1,
  },
  imageContainer: {
    height: 200,
  },
  image: {
    height: "100%",
    resizeMode: "cover",
    borderRadius: 7,
  },
  infoContainer: {
    flex: 1,
    alignItems: "center",
  },
  headline: {
    fontSize: 24,
    textAlign:'center',
    fontFamily: "overpassB",
    paddingBottom: 20,
  },
  articleReleased: {
    fontSize:16,
    fontFamily: "overpass",
  }
});