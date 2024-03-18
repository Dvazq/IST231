//import the countries data set from dummy date and state grid tile
import { View, Text, FlatList } from "react-native";
import { COUNTIRES } from "../data/dummy-data";
import StateGridTile from "../components/StateGridTile";


//create function for Homescreen
function HomeScreen(props){

    function renderStateItem(itemData){

        function pressHandler(){
            props.navigation.navigate("DestinationOverviewScreen", {
                stateID: itemData.item.id,
            })
        }

        return(
            <StateGridTile 
                name={itemData.item.name}
                color={itemData.item.color}
                onPress={pressHandler}
            />
        );
    }

    //Build grid view
    //Return a flatlist with data
    return(
        <View>
            <FlatList 
                data={COUNTIRES} 
                keyExtractor={(item) => {
                    return item.id
                }}
                renderItem={renderStateItem}
                numColumns={2}
            />
        </View>
    );
}

export default HomeScreen;
//export the screen to use in app.js