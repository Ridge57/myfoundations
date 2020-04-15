import React, {Component} from 'react'
import {View,Text,StyleSheet,FlatList,Image, TouchableOpacity,Alert} from 'react-native'
import Moment from 'moment'
import ImageView from 'react-native-image-view'


 class ReportingList extends React.Component {
     constructor (props) {
       super(props);
       this.mydatas=[];
       this.state = {
             pp: [],
             media: require('../Images/photo.png')
       }
      }

  fetchData=async()=>{
  const response= await fetch('http://192.168.1.23:3000/reports/reportinglist');
  const us = await response.json();
  console.log(us);
  this.setState({pp:us});
}


componentDidMount(){
  this.fetchData();
  console.log(this.state.pp);
}
displayDetailForReport=(item)=>{
this.props.navigation.navigate('DetailReport',{item:item})
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
        <Text style={styles.titre}>Liste des irritants saisis </Text>
        </View>
        <TouchableOpacity onPress={this.fetchData}><Image source={require('../Images/refresh.png')}/></TouchableOpacity>

        <FlatList
         data={this.state.pp}
         keyExtractor={(item,index) => index.toString()}
         renderItem={({item}) =>

         <TouchableOpacity style={styles.liste} onPress={()=>this.displayDetailForReport(item)}>
         <View>
            <Image style={styles.photo}  source={{uri: item.media}}/>
         </View>
          <View style={styles.infos_bloc}>
            <Text style={styles.infos}>Date :{Moment(item.date).format('LLLL')}</Text>
            <Text style={styles.infos}>Description :{item.description}</Text>
            <Text style={styles.infos}>Status : {item.status}</Text>
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
    width:'auto',
    margin:10,
    borderWidth:1,
    borderColor:'black',
    flex:1,
    alignItems:'center'
  },
  photo_menu:{
    marginTop:10,
    position:'relative',
    height:25,
    width:25,
  },
  infos_bloc:{
    backgroundColor:'black',
  },
  infos:{
    color:'white',
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
   marginTop:5,
   marginBottom:5
 }

})
export default ReportingList
