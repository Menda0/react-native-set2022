import React from "react";
import {Text} from "react-native"

export default class ExampleComponent2 extends React.Component{

    // Every component in react has two attributes
    // state
    // props

    // this.props.message

    render(){
        return (
            <Text>{this.props.message}</Text>
        )
    }
}