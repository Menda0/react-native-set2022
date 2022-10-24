import React from "react";
import {Text, TextInput, View} from "react-native"

export default class ExampleComponent7 extends React.Component{

    constructor(props){
        super(props)

        // Initial state
        this.state = {
            name: "Danilo Marques"
        }
    }

    setName(newName){
        this.setState({
            name: newName
        })
    }

    render(){
        return(
            <View>
                <Text>Hello {this.state.name}</Text>
                <TextInput placeholder="Insert a name" onChangeText={(text) => this.setName(text)}/>
            </View>
        )
    }
}