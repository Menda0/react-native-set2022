import React from "react";
import {View} from "react-native"
import ExampleComponent1 from "../components/ExampleComponent1";
import ExampleComponent2 from "../components/ExampleComponent2";
import { ExampleComponent9 } from "../components/ExampleComponent9";

const HomeScreen = () => {
    return (
        <View>
            <ExampleComponent1 />
            <ExampleComponent2 message="Nuno Miguel" />
            <ExampleComponent9 />
        </View>
    )
}

export default HomeScreen