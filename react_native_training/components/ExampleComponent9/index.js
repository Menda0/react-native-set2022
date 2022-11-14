import React, {useState, useEffect} from "react";
import {Button, Text, View} from "react-native"

export function ExampleComponent9(){

    // counter == this.state.counter
    // setCounter == this.setState({counter: ...})
    const [counter, setCounter] = useState(10)

    // Its not an object
    // Can t overload function
    // componentDidMount(){}

    // Component did mount
    useEffect(() => {
        console.log("Component did mount ...")
    }, [])

    // Component did update
    useEffect(() => {
        console.log("Component did update ...")
    }, [counter])

    console.log("Component did render ...")

    // Method render() == return of my functional component
    return(
        <View>
            <Text>Count: {counter}</Text>
            <Button title="Increment" onPress={() => setCounter(counter+1)}/>
        </View>
    )
}

const useCounter = (initialCounter) => {
    const [counter, setCounter] = useState(initialCounter)

    const increment = () => {
        setCounter(counter+1)
    }

    const decrement = () => {
        setCounter(counter-1)
    }

    return {counter, increment, decrement}
}

export function ExampleComponent10(){

    const {counter, increment} = useCounter(0)

    return(
        <View>
            <Text>Count: {counter}</Text>
            <Button title="Increment" onPress={() => increment()}/>
        </View>
    )
}