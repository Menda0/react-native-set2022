import React from "react"
import {View, TextInput} from "react-native"



export default class SearchBox extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return (
            <View>
                <TextInput onChangeText={text => this.props.onChangeCriteria(text)}/>
            </View>
        )
    }
}