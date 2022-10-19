import React from "react";
import {ScrollView, Text} from "react-native"
import styles from "./styles"

export default class ExampleComponent4 extends React.Component{


    // Adapts on the size of the screen
    // If content is out of bounds use scroll to see the rest of the content
    render(){
        return(
            <ScrollView style={styles.container}>
                <Text style={styles.text}>{this.props.message}</Text>
            </ScrollView>
        )
    }
}