import axios from 'axios';
import React, { Component } from 'react';  
import { FlatList,  
    StyleSheet,
    Text,
    View,
    Alert,
    ActivityIndicator
 } from 'react-native';  
  
export default class Axios extends Component {
    constructor(){
        super();
        this.state = {
            loader: false,
            DATA : []
        }

    }

    getAxiosData(){
        this.setState({loader:true})
        axios.get('https://api.sampleapis.com/coffee/hot')
        .then((response) => {
            this.setState({loader: false})
            this.setState({DATA:(response.data)})
            console.log('Axios Data: ',response.data)
        })
        .catch((error) => {
            this.setState({loader: false})
            console.log("Axios Error : ",error)
        })
    }

    componentDidMount(){
        this.getAxiosData
    }
  

    render(){
        const renderItem = ( {item} ) => (

            <View style={styles.itemContainer}>
                <Text style={styles.itemText} >{item.title}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text>
            </View>
            
        )
        return(
            <View style={styles.container}>
                <ActivityIndicator size={50} color='white' animating= {this.state.loader}>

                </ActivityIndicator>
                <Text style={styles.categoryText}
                    onPress= {()=>this.getAxiosData()}>hi this is Category list</Text>
                <FlatList style= {{ width:'95%', marginTop:10 }}
                    data={this.state.DATA}
                    renderItem= {renderItem}></FlatList>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'brown'
    },
    categoryText:{
        fontSize:24,
        fontWeight:"bold",
        color:'#fff',
    },
    itemContainer:{
        width:'100%',
        padding:10,
        backgroundColor:'#fff',
        elevation:4,
        marginBottom:10,
    },
    itemText:{
        fontSize:16,
        fontWeight:'bold',
    },
    itemDescription:{
        fontSize:14,
        fontStyle:'italic',
        color:'black',
        marginTop:10,
        backgroundColor:'yellow'
        

    }
})
