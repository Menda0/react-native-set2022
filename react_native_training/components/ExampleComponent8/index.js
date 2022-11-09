import React from "react"
import {Text} from "react-native"

/*
function ExampleComponent8(){

}
*/

// Function name == Component Name
const ExampleComponent8 = ({name, age}) => {
    // Return == render() function
    return <Text>Hello world name:{name} age:{age}</Text>
}

export default ExampleComponent8