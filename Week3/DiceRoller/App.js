import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, Pressable, Modal, TextInput } from 'react-native';

export default function App() {
  //set min and max
  const maxVal = 6;
  const minVal = 1;
  //create state management variables
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);
  const [modalIsVisible, setModalIsVisible]= useState(false);
  const [userGuess, setUserGuess] = useState("");
  const [userWager, setUserWager] = useState("");
  const [diceSum, setDiceSum] = useState(0);

  function startDiceRollHandler() {
    setModalIsVisible(true);
    setUserGuess("");
    setUserWager("");
  }

  function endDiceRollHandler() {
    setModalIsVisible(false);
  }

  function onDiceRoll() {
    const rndNum1 = Math.floor(Math.random() * (maxVal-minVal)) + minVal;
    const rndNum2 = Math.floor(Math.random() * (maxVal-minVal)) + minVal;
    setDice1(rndNum1);
    setDice2(rndNum2);

    let result = rndNum1 + rndNum2
    setDiceSum(result);

    endDiceRollHandler();
  }

  let resultText = (
    <Text style ={styles.resultText}>Roll the Dice and Make a Wager</Text>
  )

  const userGuessNum = parseInt(userGuess);
  const userWagerNum = parseInt(userWager);
  const diceSumNum = parseInt(diceSum);
  if (userGuess !== "" && userGuessNum === diceSumNum) {
    resultText =  <Text style ={styles.resultText}>You Won ${(userWager * 5).toFixed(2)}</Text>

  }
  if (userGuess !=="" && userGuessNum !== diceSumNum) {
    resultText =  <Text style ={styles.resultText}>You Lost ${(userWagerNum).toFixed(2)}</Text>
  }
    return (  
    <>

    <StatusBar style='auto' />
  <SafeAreaView style={styles.container}>
    <View style={styles.titlecontainer}>
      <View style= {styles.titleBackground}>
      <Text style={styles.title}>Dice Roller</Text>
      </View>
    </View>

    <View style={styles.rollButtonContainer}>
      <Pressable
      //add andriod ripple
      android_ripple={{color: "#ff6f6f"}}
      style= {({pressed})=> pressed && styles.pressedButton}
      onPress={startDiceRollHandler}>
        <View style= {styles.rollButton}>
          <Text style= {styles.rollButtonText}>Roll Dice</Text>
        </View>
      </Pressable>
     
    </View>

    <View style={styles.diceContainer}>
      <View style={styles.dice}> 
        <Text style={styles.diceNumber}>
        {dice1}
        </Text>
      </View>
      <View style={styles.dice}>
      <Text style={styles.diceNumber}>{dice2}</Text>
      </View>
    </View>
    
    <View style={styles.resultsContainer}>
      <Text style={styles.resultText}>The resulting dice is {diceSum}</Text>
    </View>
    <View style={styles.resultsContainer}>
      <Text style={styles.resultText}>
        {resultText}
      </Text>
    </View>

    <Modal visible={modalIsVisible} animationType='fade'>
      <SafeAreaView style= {styles.modalRoot}>
      <Text style={styles.inputLabel}>Guess the Roll Value</Text>
      <TextInput 
      style = {styles.textInput}
      //placeholder for when empty
      placeholder='Enter a Guess Between 2 and 12'
      //set keyboard type
      keyboardType='number-pad'
      //When the text is changed update userGuess
      onChangeText={setUserGuess}
      //tie the entered value to the userguess
      value={userGuess}
      />
      

      <Text style={styles.inputLabel}>What is your wager</Text>
      <TextInput 
      style= {styles.textInput}
      //placeholder for when empty
      placeholder='Enter Wager here'
      //set keyboard type
      keyboardType='number-pad'
      //When the text is changed update userGuess
      onChangeText={setUserWager}
      //tie the entered value to the userguess
      value={userWager}
      />
      
      <View style = {styles.modalButtonContainer}>
        <View style ={styles.modalButton} >
          <Button title = "Roll Dice" onPress={onDiceRoll}/>
        </View>
        <View style = {styles.modalButton}>
          <Button title = "Cancel" color= "black" onPress={endDiceRollHandler}/>
        </View>
      </View>

      </SafeAreaView>

    </Modal>




  </SafeAreaView>
  
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#510086',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40
  },
  titlecontainer:  {
    flex: 1,
    justifyContent: "center"
   
  },
  titleBackground: {
 backgroundColor: '#FFFFFF',
    padding: 10,
    paddingHorizontal: 20,
    borderWidth: 3,
    borderRadius: 7

  },
  title: {
    fontSize:60,
    fontWeight: "bold"
  },
  rollButtonContainer: {
    flex:1

  },
  pressedButton: {
    opacity: 0.5,
    borderWidth: 3,
    borderRadius: 7
  },
  rollButton: {
    backgroundColor: "white",
    padding: 10,
    paddingHorizontal: 20,
    borderWidth: 3,
    borderRadius: 7

  },
  rollButtonText: {
    fontSize: 25,
  },
  diceContainer:{
    flex: 3,
    flexDirection:"row",
    alignContent : "space-between",
    justifyContent:"center",
    alignItems:"center",
    width: "80%"
  },
  dice:{
    backgroundColor: "white",
    borderWidth: "3",
    borderRadius: "7",
    margin: 20,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  diceNumber:{
    fontSize: 40,
    fontWeight: "bold",
  },
  resultsContainer: {
    flex:1
    
  },
  resultText: {
    fontSize: 25
  },
modalRoot: {
flex: 1,
backgroundColor: '#510086',
    alignItems: 'center'
},
inputLabel: {
fontSize: 25,
color: "white",
marginTop: 20
},
textInput: {
backgroundColor: "#ffd4d4",
padding: 10,
borderWidth: 1,
borderRadius: 6,
color: "#8849b3"
},

modalButtonContainer:{
flexDirection: "row",
marginTop: 16
},
modalButton:{
width: "30%",
marginHorizontal: 8
}


});
