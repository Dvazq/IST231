import { View, StyleSheet, Text, Linking, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context"; 
import NavButton from "../components/NavButton";
import Title from "../components/Title";
import { Colors } from "react-native/Libraries/NewAppScreen";

function HomeScreen(props) {
  //set safe area screen boundaries
  const insets = useSafeAreaInsets();

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

  <View style={styles.titleContainer}>

      <Title>
        Rustic Roast
      </Title>
  </View>
  <View style={styles.imageContainer}>
    <Image style= {styles.image} source= {require("../assets/images/rusticroast.png")}
    />
  </View>
  <View style={styles.infoContainer}>
  <Text style={styles.infoText} onPress={() => Linking.openURL("tel:8433479393")}>
    843-347-9393
  </Text>

  <Text style={styles.infoText} onPress={() => Linking.openURL("https://maps.app.goo.gl/8PRehnMd8ywHUXyZ8")}>
  182 Waccamaw Medical Park Ct{"\n"} Conway SC 29526
  </Text>

  <Text style={styles.infoText} onPress={() => Linking.openURL("https://order.toasttab.com/online/rusticroast")}>
  https://www.rusticroast.co/
  </Text>
  </View>
  <View style={styles.buttonContainer}>
    <NavButton onPress = {props.onNext}>
      View Menu
    </NavButton>
  </View >
  </View>
  )

}

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer:{
    flex:1,
    alignItems: "center"
  },
  titleContainer:{
    flex:1,
    justifyContent:"center"
  },
  imageContainer: {
    flex:4
  },
  image:{
    resizeMode: "contain",
    height: "100%",
    width: 400
  },
  infoContainer: {
    flex:3,
    justifyContent:"center"
  },
  infoText:{
    fontSize:30,
    textAlign:"center",
    padding:7,
    color: Colors.primary500,
    fontFamily: "knowing-how"
  },
  buttonContainer: {
    flex:1
  }
})