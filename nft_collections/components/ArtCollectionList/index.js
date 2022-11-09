import React from "react";
import {Text, View} from "react-native"
import {ArtCollectionItem} from "../ArtCollectionItem"

export default class ArtCollectionList extends React.Component{
    render(){
        return (
            <View>
                <Text>Searching for {this.props.searchCriteria}</Text>
                {this.props.collections.map(collection => <ArtCollectionItem collection={collection} />)}
            </View>
            
        )
    }
}