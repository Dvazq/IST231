import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

import {SafeAreaView, StyleSheet, Text, View, Button, Pressable, Modal, TextInput, Image,  } from 'react-native';

export default function App() {
  const responses = [
    "Yes",
    "No",
    "Maybe",
    "Not anytime soon",
    "Nope",
    "What do you think",
    "Never",
    "I dont think so",
  ];
 
  const [modalIsVisible, setModalIsVisible]= useState(false);
  const [userQuestion, setUserQuestion] = useState("");
  const [randResponse, setrandResponse] = useState("");



  function end8ballHandler() {
    setModalIsVisible(false);
  }
  function resetQuestion() {
    setUserQuestion("");
  }
  function responseRoll() {
    setModalIsVisible(true);
    setrandResponse("");

    const randomResponse= (responses[Math.floor(Math.random()* responses.length)]);
    setrandResponse(randomResponse);

  }
  if (userQuestion !=='') {
    resultText = <Text style ={styles.resultText}>Response: {randResponse}</Text>
  }
  if (userQuestion ==='') {
    resultText = <Text style ={styles.resultText}>You must type in a question</Text>
   
  }
  return (
    <>
    <StatusBar style='dark' />
    <View style={styles.imagecontainer}>
    <View style= {styles.image}>
      <Image source={require('./assets/8ball.png')}/>
    </View>
  </View>
  
    <View style={styles.titlecontainer}>
    <View style= {styles.titleBackground}>
    <Text style={styles.title}>Magic 8-Ball</Text>
    </View>
  </View>

  <View style={styles.textContainer}>
    <View>
      <Text style={styles.text}>
        Ask a question to the Magic 8-Ball
      </Text>
    </View>
    <View style={styles.inputLabel}>
      <TextInput 
      style = {styles.textInput}
      //placeholder for when empty
      placeholder='Enter your question here'
      //set keyboard type
      keyboardType='default'
      //When the text is changed update userGuess
      onChangeText={setUserQuestion}
      value={userQuestion}
      />
    </View>
    </View>

    <View style={styles.submitButtonContainer}>
    

      <Pressable
      //add andriod ripple
      android_ripple={{color: "#ff6f6f"}}
      style= {({pressed})=> pressed && styles.pressedButton}
      onPress={resetQuestion} >
        <View style= {styles.submitButton}>
          <Text style= {styles.SubmitButtonText}>Clear</Text>
        </View>
      </Pressable>
      <Pressable
      //add andriod ripple
      android_ripple={{color: "#ff6f6f"}}
      style= {({pressed})=> pressed && styles.pressedButton}
      onPress={responseRoll} >
        <View style= {styles.submitButton}>
          <Text style= {styles.SubmitButtonText}>Submit</Text>
        </View>
      </Pressable>
    </View>
     
    <Modal visible={modalIsVisible} animationType='fade'>
    <SafeAreaView style= {styles.modalRoot}>
    <View style={styles.resultsContainer}>
      <Text style={styles.resultText}>Question: {userQuestion}</Text>
    </View>
    <View style={styles.resultsContainer}>
      <Text style={styles.resultText}>
        Response: {randResponse}
      </Text>
    </View>

    <View style = {styles.modalButtonContainer}>
        <View style = {styles.modalButton}>
          <Button title = "Cancel" color= "white" onPress={end8ballHandler}/>
        </View>
      </View>

    </SafeAreaView>

    </Modal>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AC94F4',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40
  },
  imagecontainer:{
    paddingTop: 20,
    alignItems:'center',
    backgroundColor:"#AC94F4"
  },
  image: {

  },
  titlecontainer:{
    flex:1,
    justifyContent:'center',
    backgroundColor:"#371F76",
 
  },
  titleBackground:{
    backgroundColor: '#FFFFFF',
    padding: 10,
    paddingHorizontal: 20,
    borderWidth: 3,
    borderRadius: 7
  },
  title:{
    fontSize:60,
    fontWeight: "bold"
  },
  textContainer:{
    flex:2,
  paddingTop:20,
  backgroundColor:'#AC94F4'
  

  },
  
  text:{
fontSize: 20,
paddingBottom:20,
fontWeight:"bold",
justifyContent:"center",
alignItems:"center",

  },
  inputLabel: {
paddingTop:20,
backgroundColor: "#FFFFFF",
height:"25%",
paddingHorizontal: 20,
borderWidth: .5,
borderRadius: 2

  },
  textInput: {
fontSize:25,
fontWeight:"bold",
justifyContent:'center',
alignItems:"center"
  },
  submitButtonContainer: {
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:'#AC94F4',
flexDirection:'row',

  },
  submitButton: {
    backgroundColor: "white",
    padding: 10,
    paddingHorizontal: 20,
    borderWidth: 3,
    borderRadius: 7,
    marginRight: 25
  },
  SubmitButtonText: {
    fontSize: 40,
alignItems:'center',
justifyContent:'center',
fontWeight:'bold'
  },
  modalRoot: {
    flex:1,
    backgroundColor:'#AC94F4'

    
  },
  resultsContainer: {
backgroundColor:"FFFFFF",
flex:1
  },
  resultText: {
fontSize:25
  },
  modalButtonContainer: {
    backgroundColor:"#371F76"

  },
  modalButton: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 6,
  }

});
