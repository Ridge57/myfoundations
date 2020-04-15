import React, {Component} from 'react'
import {View,Text,StyleSheet,FlatList,Image, TouchableOpacity,Alert} from 'react-native'
import Moment from 'moment'

class IdeesList extends React.Component {
     constructor (props) {
       super(props);
       this.state = {
             donnees: []
       }
      }

  fetchData=async()=>{
    const response= await fetch('http://192.168.1.23:3000/ideas/ideaslist');
    const us = await response.json();
    this.setState({donnees:us});
  }

componentDidMount(){
  this.fetchData();
  //this.forceUpdate()
}
displayDetailForIdee=(item)=>{
console.log('oki');
this.props.navigation.navigate('DetailIdee',{item:item})
}
displayMenu=()=>{
  this.props.navigation.navigate('Accueil')
}
  render(){
    Moment.locale('fr');
    return(
      <View style={styles.main_container}>
        <View>
        <TouchableOpacity onPress={()=>this.displayMenu()}><Image style={styles.photo_menu} source={require('../Images/menu.png')}/></TouchableOpacity>
        <Text style={styles.titre}>Liste des propositions </Text>
        </View>
        <TouchableOpacity onPress={this.fetchData}><Image source={require('../Images/refresh.png')}/></TouchableOpacity>

        <FlatList
         data={this.state.donnees}
         keyExtractor={(item,index) => index.toString()}
         renderItem={({item}) =>

         <TouchableOpacity style={styles.liste} onPress={()=>this.displayDetailForIdee(item)}>
          <View style={styles.infos}>
            <Text>Date :{Moment(item.date).format('LLLL')}</Text>
            <Text>Description :{item.description}</Text>
            <Text>Status : {item.status}</Text>
          </View>
         </TouchableOpacity>
       }
       />
      </View>
    )
  }
}

const styles=StyleSheet.create({
  liste:{
    padding:5,
    margin:10,
    borderWidth:1,
    borderColor:'#ffede1',
    //backgroundColor:'#78E5F4'
  },
  photo_menu:{
    marginTop:10,
    position:'relative',
    height:25,
    width:25,
  },
  infos:{
    backgroundColor:'#ffede1'
  },
  main_container:{
    flex:1,
    alignItems:'center',
    backgroundColor:'#FFFFFF'
  },
  titre:{
    marginTop:20,
    fontSize:25,
    backgroundColor:'#78E5F4',
    textAlign: 'center',
    height:40,
    width:325
  },
  photo: {
   width: 150,
   height: 150,
 }

})
export default IdeesList
