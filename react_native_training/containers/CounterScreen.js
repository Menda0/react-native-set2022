import React from "react";
import {View, Text, Button} from "react-native"
import {useSelector} from "react-redux"

// Its container because its connected to our store
const CounterScreen = () => {

    // state -> store
    // counter -> reducer
    // value -> property on reducer
    const counterValue = useSelector(state => state.counter.value)

    return(
        <View>
            <Text>My Counter value: {counterValue}</Text>
            <Button title="Increment"/>
        </View>
    )
}

export default CounterScreen