import React from "react"
import {Text} from "react-native"
import {NavigationContainer} from "@react-navigation/native"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import HomeScreen from "../containers/HomeScreen"
import Icon from "react-native-vector-icons/FontAwesome"
import CompomentNavigation from "./ComponentNavigation"


const Tab = createBottomTabNavigator()
const MainNavigation = () =>{
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                headerShown: false
            }}>
                <Tab.Screen
                    options={{
                        tabBarIcon: ({size, color}) => <Icon size={size} color={color} name="home"/>
                    }}
                    name="Home" 
                    component={CompomentNavigation} 
                 />
                <Tab.Screen
                    options={{
                        tabBarIcon: ({size, color}) => <Icon size={size} color={color} name="heart"/>
                    }}
                    name="Favourites" 
                    component={HomeScreen} 
                 />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigation