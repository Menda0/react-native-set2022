import React from "react";
import {Text} from "react-native"

export default class ArtCollectionList extends React.Component{
    render(){
        return (
            <Text>Searching for {this.props.searchCriteria}</Text>
        )
    }
}