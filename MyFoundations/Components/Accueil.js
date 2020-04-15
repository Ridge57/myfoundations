import React, {Component} from 'react'
import {View,TouchableOpacity,Image,StyleSheet,ScrollView,Text} from 'react-native'

class Accueil extends React.Component {
  constructor (props) {
    super(props);

   }


displayReport=()=>{
  this.props.navigation.navigate('Report')
}
displayIdees=()=>{
  this.props.navigation.navigate('Idees')
  console.log('ici');
}
displayProcedures=()=>{
  this.props.navigation.navigate('PDFExample')
  console.log('icix');
}
  render(){
    return (
      <View style={styles.main_container}>
        <View style={styles.title_container}><Text style={styles.titre}>ACTIVITES </Text></View>
        <View style={styles.menu_container}>
          <View style={styles.ligne_1}>
            <TouchableOpacity style={styles.img_checklist}><Image source={require('../Images/menu_checklist.png')}/></TouchableOpacity>
            <TouchableOpacity style={styles.img_irritant} onPress={()=>this.displayReport()}><Image source={require('../Images/menu_irritant.png')}/></TouchableOpacity>
          </View>
          <View style={styles.ligne_2}>
            <TouchableOpacity style={styles.img_procedure} onPress={()=>this.displayProcedures()}><Image source={require('../Images/menu_procedure.png')}/></TouchableOpacity>
            <TouchableOpacity style={styles.img_idee} onPress={()=>this.displayIdees()}><Image source={require('../Images/menu_idee.jpg')}/></TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}
const styles=StyleSheet.create({
  main_container:{
    flex:1,
    backgroundColor:'#FFFFFF',
  },
  title_container:{
    alignItems:'center'
  },
  titre:{
    marginTop:30,
    fontSize:25,
    backgroundColor:'#78E5F4',
    textAlign: 'center',
    height:40,
    width:325
  },
  menu_container:{
    justifyContent:'center',
    flex:1,
    //justifyContent:'space-evenly'
  },
  ligne_1:{
    flexDirection:'row',
    justifyContent:'space-around',
    marginBottom:50,
  },
  ligne_2:{
    flexDirection:'row',
    justifyContent:'space-around',
  },
  img_checklist:{
    borderWidth:2,
    borderColor:'#47d147',
    width:150,
    height:150,
    justifyContent:'center',
    alignItems:'center'
  },
  img_irritant:{
    borderWidth:2,
    borderColor:'red',
    width:150,
    height:150,
    justifyContent:'center',
    alignItems:'center'
  },
  img_procedure:{
    borderWidth:2,
    borderColor:'#78E5F4',
    width:150,
    height:150,
    justifyContent:'center',
    alignItems:'center'
  },
  img_idee:{
    borderWidth:2,
    borderColor:'#ffe066',
    width:150,
    height:150,
    justifyContent:'center',
    alignItems:'center'
  }
})
export default Accueil
