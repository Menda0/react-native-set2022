import React from "react";
import { SafeAreaView, Text } from "react-native";
import ArtCollectionList from "./components/ArtCollectionList";
import SearchBox from "./components/SearchBox";
import data from "./assets/collections3.json"

export default class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      searchCriteria: ""
    }
  }

  changeCriteria(newSearchCriteria){
    this.setState({
      searchCriteria: newSearchCriteria
    })
  }

  // Parent to child comunication
  // Callback will be passed to the child via props
  // Child must execute callback and changes state of parent
  render(){
    return (
      <SafeAreaView>
        <SearchBox onChangeCriteria={(text) => this.changeCriteria(text)}/>
        <ArtCollectionList searchCriteria={this.state.searchCriteria} />
      </SafeAreaView>
    )
  }
}