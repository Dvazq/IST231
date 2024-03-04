import { Text, View, StyleSheet, ScrollView, Switch } from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import Title from "../components/Title";
import { RadioGroup } from "react-native-radio-buttons-group";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import NavButton from "../components/NavButton";
import Colors from "../constants/colors";
function HomeScreen(props){
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


  <ScrollView style= {styles.scrollContainer}>
    
<View style= {styles.titleContainer}>
  <Title>Bike Repair Shop</Title>
</View>

    <View style= {styles.radioContainer}>
      <Text style= {styles.radioHeader}>Service Times:</Text>
      <RadioGroup 
              radioButtons={props.serviceTimeRadioButtons}
              onPress={props.onSetserviceTimesId}
              selectedId={props.serviceTimesId}
              layout="column"
              containerStyle={styles.radioGroup}
              labelStyle= {styles.radioGroupLabels}
      />
    </View>

    <View style= {styles.rowContainer}>
        <View style = {styles.checkBoxContainer}>
          <Text style= {styles.checkBoxHeader}>Service Options:</Text>
            <View style = {styles.checkBoxSubContainer}>
                {props.serviceOptions.map((item) => {
                  return (
                  <BouncyCheckbox
                  key={item.id}
                  text={item.name}
                  onPress={props.onSetServiceOptions.bind(this, item.id)}
                  textStyle ={{textDecorationLine: "none",color:Colors.primary500}}
                  innerIconStyle={{
                    borderRadius: 0,
                    borderColor: Colors.primary500
                  }}
                  iconStyle={{borderRadius: 0,}}
                  fillColor={Colors.primary500}
                  style =  {{padding: 2}}
                />
                  );
            })}
            </View>
        </View>
    </View>
        

    <View style = {styles.rowContainer}>
      <View style = {styles.addOnsContainer}>
        <View style = {styles.addOnsSubContainer}>
        <Text style = {styles.addOnsLabel}>
          Join Newsletter
        </Text>
        <Switch 
          onValueChange={props.onSetnewLetter}
          value ={props.newsLetter}
          thumbColor={
            props.newsLetter ? Colors.primary500 : Colors.primary800
          }
          trackColor={{false: Colors.primary500, true: Colors.primary800}}
        
        />


      </View>

        </View>

  
      <View style = {styles.addOnsSubContainer}>
        <Text style = {styles.addOnsLabel}>
          Rental Membership Signup
        </Text>
        <Switch 
          onValueChange={props.onSetmembershipSignup}
          value ={props.membershipSignup}
          thumbColor={
            props.membershipSignup ? Colors.primary500 : Colors.primary800
          }
          trackColor={{false: Colors.primary500, true: Colors.primary800}}
        
        />


      </View>

    </View>
   
    

    <View style ={styles.buttonContainer}>
      <NavButton onPress={props.onNext}>Submit Order</NavButton>
    </View>




  </ScrollView>
</View>
)}
export default HomeScreen;


const styles = StyleSheet.create({
  rootContainer:{flex: 1},
  titleContainer:{
    marginBottom: 10,
    borderColor: Colors.primary500,
    paddingHorizontal:30,
    paddingVertical: 5,
    fontFamily:"bebasNeue"


  },
  scrollContainer: {
    flex: 1
  },
  radioContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  radioHeader: {
    fontSize: 30,
    color: Colors.primary500,
    fontFamily:"bebasNeue"

  },
  radioGroup: {
    paddingBottom: 20
  },
  radioGroupLabels: {
    fontSize: 15,
    color: Colors.primary500,
    fontFamily:"bebasNeue"
  },
  rowContainer:{
    flexDirection: "rpw",
    justifyContent: "space-evenly",
    paddingBottom: 20,
    fontFamily:"bebasNeue"

  },
  checkBoxContainer:{    fontFamily:"bebasNeue"
},
  checkBoxHeader: {
    fontSize:20,
    color: Colors.primary500,
    fontFamily:"bebasNeue"

  },
  checkBoxSubContainer: {
    padding: 2,
    fontFamily:"bebasNeue"

  },
  cheeseContainer: {
    alignItems: "center",
    fontFamily:"bebasNeue"

  },
  addOnsContainer: {
    justifyContent: "space-between",
    fontFamily:"bebasNeue"

  },
  addOnsSubContainer: {
    flexDirection:"row",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily:"bebasNeue"

  },
  addOnsLabel: {
    color: Colors.primary500,
    fontSize: 20,
    fontFamily:"bebasNeue"

  },
  buttonContainer: {
    alignItems: "center",
    fontFamily:"bebasNeue"

  }

});