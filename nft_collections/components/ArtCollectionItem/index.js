import React from "react";
import {View, Text, Image} from "react-native"


// This is a presentanional component
// THis component should receive image, title and description via props
export class ArtCollectionItem extends React.Component{
    render(){
        return(
            <View>
                <Text>Collection Name: {this.props.collection.name}</Text>
            </View>
        )
    }
}