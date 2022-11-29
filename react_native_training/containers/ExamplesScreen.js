import React from "react";
import {View, Button} from "react-native"
import { useNavigation } from "@react-navigation/native";


const ExamplesScreen = () => {

    const navigation = useNavigation()

    return (
        <View>
            <Button title="ExampleComponent1" onPress={() => navigation.navigate("Example Component 1")}/>
            <Button title="ExampleComponent2" onPress={() => navigation.navigate("Example Component 2")}/>
            <Button title="ExampleComponent3" onPress={() => navigation.navigate("Example Component 3")}/>
            <Button title="Counter Screen" onPress={() => navigation.navigate("Counter Screen")} />
            <Button title="Dog Facts" onPress={() => navigation.navigate("Dog Facts")} />
        </View>
    )
}

export default ExamplesScreen