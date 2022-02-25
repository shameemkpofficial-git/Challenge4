import React,{Component} from "react";
import{
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList
}from 'react-native'

export default class App extends Component{

  constructor(){
    super();
    this.state = {
      loader: false,
      DATA : []
    }
  }

  getData(){
    this.setState({loader: true})
    fetch('https://api.sampleapis.com/wines/reds')
    .then((response) => response.json())
    .then((response) => {
      if (response.length > 0) {
        this.setState({DATA : response})
      }
      this.setState({loader:false})
      console.log('your response is ',response)

    })
    .catch((error) => {
      this.setState({loader: false})
      console.log('errro catched:',error)
    })
  }

  render(){
    const renderItem = ({item}) => (
      <View style={styles.itemContainer}>
        <Text style={styles.categoryText}>{item.winery}</Text>
        <Text style={styles.genreText} >Wine:{item.wine} </Text>
        
      </View>
    )
    return(
      <View style={styles.container}>
        <ActivityIndicator color='#fff' size={50} animating={this.state.loader}></ActivityIndicator>
        <Text style={styles.AppText}
        onPress= {() => this.getData()}>Select Your W!NE</Text>
        <FlatList style={{width:'95%', marginTop:10}}
        data={this.state.DATA}
        renderItem = {renderItem} ></FlatList>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    height:'100%',
    width:'100%',
    backgroundColor:'black'
  },
  AppText:{
    color:'#fff',
    paddingLeft:90,
    // paddingTop:400,
    fontSize:24,

  },
  itemContainer:{
    width:'100%',
    backgroundColor:'#fff',
    padding:10,
    elevation:4,
    marginBottom:10

  },
  categoryText:{
    fontSize:24,
    fontWeight:'bold',
    color:'black'
  },
  genreText:{
    fontSize:14,
    fontStyle:'italic',
    color:'#fff',
    marginTop:5,
    backgroundColor:'#827385',
    borderRadius:5
  }
})