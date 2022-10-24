import React from "react";
import {Text, View, Button, Alert} from "react-native"
import styles from "./style";

// In this component we will use props
// This component should be a counter
// When click on the button the counter should increment
// Each component as their own state
export default class ExampleComponent6 extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            counter: 0
        }
    }

    incrementCounter(){

        // You cannot change the state directly
        // Use this.setState method to change the component state
        // Set state is an async actions
        // State changes fires a new re render of the component
        // this.state.counter++

        this.setState({
            counter: this.state.counter + 1
        })
    }
    
    render(){
        return (
        <View>
            <Text style={styles.text}>Counter: {this.state.counter}</Text>
            <Button title="Increment Counter" onPress={() => this.incrementCounter()}/>
        </View>
        )
    }
}