//imports make sure to import both data sets from dummy data
import { COUNTIRES,DESTINATIONS } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Colors from "../constants/colors";
import DestinationItem from "../components/DestinationItems";



// create a function for the screen
function DestinationOverviewScreen(props){

    const stateId = props.route.params.stateID;

    useLayoutEffect(() => {
        const state = COUNTIRES.find((state) => state.id === stateId);
        props.navigation.setOptions({ title: state ? state.name : null });
    }, [stateId, props.navigation]);

    const displayedCampgrounds = DESTINATIONS.filter((campgroundItem) => {
        return campgroundItem.stateId === stateId;
    });
//render each destination item for a country
    function renderCampgroundItem(itemData){
        const campgroundItemProps = {
            name: itemData.item.name,
            imageUrl: itemData.item.imageUrl,
            cost: itemData.item.cost,
            foundedYear: itemData.item.foundedYear,
            rating: itemData.item.rating,
            listIndex: itemData.index
        }
        return <DestinationItem {...campgroundItemProps} />
    }

    return(
        <View style={styles.container}>
            <FlatList 
                data={displayedCampgrounds}
                keyExtractor={(item) => item.id}
                renderItem={renderCampgroundItem}
            />
        </View>
    );
}

export default DestinationOverviewScreen;
//export the screen to use it in the homescreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
})