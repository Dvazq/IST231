import { View, StyleSheet, Text, FlatList, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context"; 
import { useState } from "react";
import Title from "../components/Title";
import MenuItem from "../components/RestaurantItems";
import NavButton from "../components/NavButton";


function MenuScreen(props) {
  //set safe area screen boundaries
  const insets = useSafeAreaInsets();

  const [menuItems,setMenuItems] = useState([
{
  name: "Avocado Chorizo Toast",
  image: require("../assets/images/avocadoToast.jpg"),
  price: "$5.75",
  id: 1,
},
{
  name: "Berries and Cream Toast",
  image: require("../assets/images/berriestoast.jpg"),
  price: "$5.00",
  id: 2
},
{
  name:"Bacon, Egg, and Cheese Croissant",
  image: require("../assets/images/croissant.jpg"),
  price: "$5.75",
  id: 3
},
{
  name: "Turkey Apple Brie Panini Classic",
  image: require("../assets/images/turkeypanni.jpg"),
  price: "$9.25",
  id: 4
},
{
  name: "Avocado BLT Club Panini Classic",
  image: require("../assets/images/bltpanni.jpg"),
  price: "$9.50",
  id: 5
}





  ])
  return (
    <View style={[
      styles.rootContainer,
    {
      paddingTop: insets.top,
      paddingBottom:insets.bottom , 
      paddingLeft:  insets.left,
      paddingRight: insets.right,
    }
  ]}>

    <View style = {styles.titleContainer}>
    <Title> Menu </Title>
    </View>

    <View style = {styles.listContainer}>
      <FlatList data ={menuItems}
      alwaysBounceVertical ={false}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => {
        return (
          <MenuItem 
          name= {itemData.item.name}
          image= {itemData.item.image}
          price = {itemData.item.price}/>
        );

      }}/>

    </View>
    <View style = {styles.buttonContainer}>
    <NavButton onPress = {props.onNext}>
      Home
    </NavButton>
  </View>

  </View>
  )

}

export default MenuScreen;

const styles = StyleSheet.create({
  rootContainer:{
    flex:1,
    width: 400,
    alignItems: "center"
  },
  titleContainer:{
    flex:1,
    alignItems: "center"
  },
  listContainer:{
    flex:7,
    width: "95%"
  },
  buttonContainer:{
    flex:1,
  }
})