import React from "react";
import {View, Text} from "react-native"


// This is a presentanional component
// THis component should receive image, title and description via props
export class ArtCollectionItem extends React.Component{
    render(){
        return(
            <View>
                <Image>Image</Image>
                <Text>Title</Text>
                <Text>Description</Text>
            </View>
        )
    }
}