import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, Linking } from 'react-native';

export default function App() {
  return (
    <>
  <StatusBar style= 'dark' />
  <SafeAreaView style={styles.container}>
  <View style={styles.imageContainer}>
  <Image style={styles.Image} source={require("./assets/images/restauraunt.png")}/>
  </View>
  <View style={styles.informationContainer}>
    <Text style={styles.text}>Logan's Roadhouse</Text>
    <Text style={styles.text} onPress={() => Linking.openURL("https://logansroadhouse.com/menu/")}>www.logansroadhouse.com</Text>
    <Text style= {styles.text} onPress={() => Linking.openURL("tel:+18438394666")}>(843) 839-4666</Text>
    <Text style = {styles.text} onPress={() => Linking.openURL("https://maps.app.goo.gl/U1Vpcbj5eSHfyxaDA")}>Open in Google Maps</Text>
  </View>

  </SafeAreaView>
  </>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  imageContainer:{
    backgroundColor: '#FFFFFF',
   width: "100%", flex: 1,
   borderWidth:5,
   borderColor: "#000000"
    
  },
  image: {
    resizeMode: "cover"
  },
  informationContainer:{
    backgroundColor: '#FFFFFF',
    flex: 2,
    alignItems: "center",
    justifyContent: 'flex-start'
  },
  text: {
    fontSize: 25,
    fontStyle: "italic",
    marginTop: 12,
    marginBottom: 12,
    fontWeight: "bold"
  }
});
