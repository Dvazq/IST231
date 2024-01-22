import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, Linking } from 'react-native';

export default function App() {
  return (
    <>
    <StatusBar style= '' />
    <SafeAreaView style={styles.container}>
    <View style={styles.imageContainer}>
      <Image style= {styles.Image} source={require("./assets/images/cardphoto.jpg")}/>
    </View>
    <View style={styles.informationContainer}>
      <Text style={styles.text}>Daniel Vazquez</Text>
      <Text style={styles.text} onPress={() => Linking.openURL("mailto:danielv4zquez@gmail.com")}>danielv4zquez@gmail.com</Text>
      <Text style= {styles.text} onPress={() => Linking.openURL("tel:+18433333903")}>(843) 333-3903</Text>
      <Text style = {styles.text} onPress={() => Linking.openURL("https://github.com/Dvazq/IST236.git")}>GitHub</Text>
    </View>
  
    </SafeAreaView>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000080',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer:{
    backgroundColor: '#000080',
   flex: 1,
   width:"100%",
   paddingTop: 40,
   borderColor: "#000000",
   alignItems:'center',
   flexDirection:'row'
    
  },
  image: {
    flex:1,
    resizeMode: "cover"
  },
  informationContainer:{
    backgroundColor: '#87CEEB',
    flex: 3,
    width:"100%",
    alignItems: "flex-start"
  },
  text: {
    fontSize: 25,
    fontStyle: "italic",
    marginTop: 10,
    marginBottom: 12,
    fontWeight: "bold"
  }
});
