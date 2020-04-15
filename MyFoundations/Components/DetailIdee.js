import React, {Component} from 'react'
import {View,Text,StyleSheet,FlatList,Image, TouchableOpacity,Alert,ScrollView} from 'react-native'
import Moment from 'moment'

class DetailIdee extends React.Component {
  constructor (props) {
    super(props);
    this.data = this.props.navigation.state.params.item
   }

  render(){
    return(
      <ScrollView style={styles.main_container}>
        <View style={styles.title_container}>
        <Text style={styles.titre}> Detail de la saisie </Text>
        </View>
        <View style={styles.donnees}>
        <Text style={styles.section_titre}>Saisie le :</Text>
        <Text style={styles.section_texte}>{Moment(this.data.date).format('LLLL')}</Text>
        <Text style={styles.section_titre}>Description : </Text>
        <Text style={styles.section_texte}>{this.data.description}</Text>
        <Text style={styles.section_titre}>Commentaires :</Text>
        <Text style={styles.section_texte}>{this.data.commentaires}</Text>
        <Text style={styles.section_titre}>Status : </Text>
        <Text style={styles.section_texte}>{this.data.status}</Text>
        </View>
      </ScrollView>
    )}
}

const styles=StyleSheet.create({
  donnees:{
    marginTop:20
  },
  title_container:{
    alignItems:'center',
  },
  main_container:{
    flex:1,
    padding:5,
    margin:10,
    backgroundColor:'#FFFFFF'
  },
  titre:{
    marginTop:10,
    fontSize:25,
    backgroundColor:'#78E5F4',
    textAlign: 'center',
    height:40,
    width:325
  },
  photo: {
   width: 300,
   height: 300,
 },
 photo_container: {
  alignItems:'center',
},
section_titre:{
  backgroundColor:'#78E5F4',
  fontWeight:'bold'
},
section_texte:{
  padding:3
}
})
export default DetailIdee
