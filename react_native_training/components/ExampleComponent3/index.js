import React from "react";
import {View, Text} from "react-native"
import styles from "./styles";

export default class ExampleComponent3 extends React.Component {
    
    // View is fixed and cannot be scrolled
    // Elements out of bound will be cliped by the screen
    // Use ScrollView if you have large data on your screen
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.props.message}</Text>
            </View>
        )
    }
}