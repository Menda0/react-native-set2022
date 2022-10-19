import React from "react";
import {Image} from "react-native"
import styles from "./styles"

export default class ExampleComponent5 extends React.Component{
    render(){
        return(
            <Image style={styles.image} source={require("../../assets/images/exampleImage.jpeg")}/>
        )
    }
}