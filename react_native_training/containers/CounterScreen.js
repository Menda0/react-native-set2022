import React from "react";
import {View, Text, Button} from "react-native"
import {useSelector, useDispatch} from "react-redux"
import * as counter  from "../store/counter.reducer"


// Its container because its connected to our store
const CounterScreen = () => {

    // state -> store
    // counter -> reducer
    // value -> property on reducer
    const counterValue = useSelector(state => state.counter.value)
    const dispatch = useDispatch()

    return(
        <View>
            <Text>My Counter value: {counterValue}</Text>
            <Button title="Increment" onPress={() => dispatch(counter.actions.incrementCounter())}/>
        </View>
    )
}

export default CounterScreen