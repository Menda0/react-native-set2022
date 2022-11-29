import React, {useEffect} from "react"
import {Text, ScrollView} from "react-native"
import {useSelector, useDispatch} from "react-redux"
import * as dogs from "../store/dogs.reducer"
import axios from "axios"

function useDogFacts(){
    // state -> store
    // dogs -> reducer name
    // facts -> property inside reducer dogs
    const facts = useSelector(state => state.dogs.facts)
    const error = useSelector(state => state.dogs.error)
    const isLoading = useSelector(state => state.dogs.isLoading)
    const dispatch = useDispatch()

    const getDogFacts = async (size=10) => {
        dispatch(dogs.actions.setIsLoading(true))
        const url = `https://dog-api.kinduff.com//api/facts?number=${size}`

        // Fetch data from the endpoint
        // response -> http response
        try{
            setTimeout(async () => {
                const response = await axios.get(url)
                // data -> body of http response
                const {facts} = response.data

                dispatch(dogs.actions.setFacts(facts))
                dispatch(dogs.actions.setIsLoading(false))
            }, 3000)
            
        }catch{
            dispatch(dogs.actions.setError("App was unable to fetch data from API"))
            dispatch(dogs.actions.setIsLoading(false))
        }
        
        
    }

    // On mount = On load of component
    // [] = On Mount
    useEffect(() => {
        console.log("Component is loaded, start getting dog facts ...")
        getDogFacts()
    }, [])

    return {facts, error}
}

function DogFactScreen(){

    const {facts, error, isLoading} = useDogFacts()
    
    return (
        <ScrollView>
            {isLoading && <Text>Fetching dog facts ...</Text>}
            {error && <Text>{error}</Text>}
            {facts.map(fact => <Text style={styles.factContainer}>{fact}</Text>)}
        </ScrollView>
    )
}

const styles = {
    factContainer:{
        padding: 20
    }
}

export default DogFactScreen