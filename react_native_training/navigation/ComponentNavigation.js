import React from "react";

import {createNativeStackNavigator} from "@react-navigation/native-stack"
import ExamplesScreen from "../containers/ExamplesScreen";
import ExampleComponent1Screen from "../containers/ExampleComponent1Screen";
import ExampleComponent2Screen from "../containers/ExampleComponent2Screen";
import ExampleComponent3Screen from "../containers/ExampleComponent3Screen";
import CounterScreen from "../containers/CounterScreen";

// Vertical Navigation

const Stack = createNativeStackNavigator()

const CompomentNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Examples Screen" component={ExamplesScreen} />
            <Stack.Screen name="Example Component 1" component={ExampleComponent1Screen} />
            <Stack.Screen name="Example Component 2" component={ExampleComponent2Screen} />
            <Stack.Screen name="Example Component 3" component={ExampleComponent3Screen} />
            <Stack.Screen name="Counter Screen" component={CounterScreen} />
        </Stack.Navigator>
    )
}

export default CompomentNavigation