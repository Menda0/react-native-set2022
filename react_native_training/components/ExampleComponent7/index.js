import React from "react";
import {Text, TextInput, View} from "react-native"

export class ExampleComponent7 extends React.Component{

    constructor(props){
        super(props)

        // Initial state
        this.state = {
            name: "Danilo Marques"
        }

        console.log("Component initialized")
    }

    setName(newName){
        this.setState({
            name: newName
        })
    }

    componentWillMount(){
        console.log("Component will mount ...")
    }

    componentDidMount(){
        console.log("Component did mount")
    }

    componentWillUpdate(){
        console.log("Component will update")
    }

    componentDidUpdate(){
        console.log("Component did update")
    }

    render(){
        console.log("Did render ...")
        return(
            <View>
                <Text>Hello {this.state.name}</Text>
                <TextInput placeholder="Insert a name" onChangeText={(text) => this.setName(text)}/>
            </View>
        )
    }
}