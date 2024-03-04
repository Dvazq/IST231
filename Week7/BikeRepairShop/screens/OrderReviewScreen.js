import {StyleSheet,View, Text} from "react-native";
import Title from "../components/Title";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from "../constants/colors";
import NavButton from "../components/NavButton";




function OrderReviewScreen(props){
  const insets = useSafeAreaInsets();
  return(
  <View
  styles= {[
  styles.rootContainer,
  {
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
    paddingLeft: insets.left,
    paddingRight: insets.right,
  },
]}
> 
  <View style = {styles.titleContainer}>
    <Title>
      Order Summary
    </Title>
  </View>

  <View style={styles.subTitleContainer}>
    <Text style = {styles.subTitle}>Your Order Has been placed with the details below:</Text>
  </View>

  <View style = {styles.ingredientsContainer}>
    <Text style = {styles.ingredient}>Service Time</Text>
    <Text style = {styles.subIngredient}>{props.servicetime}</Text>
    
    <Text style = {styles.ingredient}>Service Options </Text>
    {props.serviceOptions.map((item) => {
      if (item.value) {
        return (
          <Text key={item.id} style ={styles.subIngredient}>
            {item.name}
          </Text>
        );
      }
    })}
    
        <Text style = {styles.ingredient}>Newsletter </Text>
        <Text style ={styles.subIngredient}>{props.newsLetter? "Yes": "No"}</Text>
        <Text style = {styles.ingredient}>Rental Membership </Text>

        <Text style ={styles.subIngredient}>{props.membershipSignup ? "Yes": "No"}</Text>
     
  </View>

  <View style={styles.subTitleContainer}>
    <Text style = {styles.subTitle}>Subtotal: ${props.price.toFixed(2)}</Text>
    <Text style = {styles.subTitle}>Sales Tax: ${(props.price * 0.06).toFixed(2)}</Text>
    <Text style = {styles.subTitle}>Total: ${(props.price + props.price * 0.06).toFixed(2)}</Text>

  </View>
  <View style = {styles.buttonContainer}>
    <NavButton onPress = {props.onNext}>Return Home</NavButton>
  </View>

</View>
  );
}
export default OrderReviewScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  titleContainer: {
    marginBottom: 10,
    marginHorizontal: 10,
    paddingVertical: 3,
    paddingHorizontal: 10,
   
    borderColor: Colors.primary500,
    flex: 1,
    fontFamily:"bebasNeue"

  },
  subTitleContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    fontFamily:"bebasNeue"

  },
  subTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.primary500,
    fontFamily:"bebasNeue"

  },
  ingredientsContainer:{
    flex: 3,
    fontFamily:"bebasNeue"

  },
  ingredient: {
    fontSize: 20,
    color: Colors.primary500,
    fontFamily:"bebasNeue"

  },
  subIngredient: {
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
    fontFamily:"bebasNeue"

  },
  buttonContainer: {
    alignItems:"center"
  }
});