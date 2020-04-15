import React, {Component} from 'react'
import {View,TouchableOpacity,Image,StyleSheet,ScrollView,Text,TextInput,Alert} from 'react-native'

class Idees extends React.Component {
  constructor (props) {
    super(props);
    this.myTextInput = React.createRef(),
    this.description='pas de description',
    this.emetteur='emetteur standard'
  }

  displayMenu=()=>{
    this.props.navigation.navigate('Accueil')
  }
  _onChangeText=(text)=>{
    this.description=text;
  }
  _resetDescription(){
    this.myTextInput.current.clear();
    console.log('oki');
  }
  _displayAlert(){
        Alert.alert(
    '',
    'Votre saisie est enregistrée! Merci!',
    [
      {text: 'OK', onPress: () => console.log('Ask me later pressed')},
    ],
    {cancelable: false},
  );
  }
  _savedata=()=>{
    fetch('http://192.168.1.23:3000/ideas/nouvelleidee', {
           method: 'POST',
           headers: {'Content-Type': 'application/json'},
           body: JSON.stringify({
              description: this.description,
              emetteur: this.emetteur})
     })
     .then(response => {
       console.log(response);
      if (response.status >= 400) {throw new Error("Bad response from server")}})
     .then(() => {
       this._resetDescription()
       this._displayAlert()})
     .catch(function(err) {
           console.log(err);
       });
  }
  render(){
    return(
      <View style={styles.main_container}>
        <View>
        <TouchableOpacity onPress={()=>this.displayMenu()}><Image style={styles.photo_menu} source={require('../Images/menu.png')}/></TouchableOpacity>
        <Text style={styles.titre}>Soumettre une proposition </Text>
        </View>
        <TextInput style={styles.description_anomalie}
        placeholder="Description du projet ..." multiline onChangeText={text => this._onChangeText(text)}
        ref={this.myTextInput}/>
        <TouchableOpacity onPress={()=>this._resetDescription()}><Text style={styles.effacer_tout}>effacer tout</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>this._savedata()}><Image style={styles.photo_envoie}source={require('../Images/envoie.png')}/></TouchableOpacity>
      </View>
    )
  }
}
const styles=StyleSheet.create({
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
  photo_menu:{
    marginTop:10,
    position:'relative',
    height:25,
    width:25,
  },
  photo_envoie:{
    marginTop:40,
  },
  description_anomalie:{
    fontSize:20,
    marginTop:40,
    height:350,
    width:325,
    paddingTop:15,
    paddingBottom:10,
    paddingLeft:10,
    paddingRight:10,
    textAlignVertical : "top", //only works on android
    borderWidth:2,
    borderColor:'#FFFFFF',
    borderTopColor:'#78E5F4',
    borderBottomColor:'#78E5F4',
  },
  effacer_tout:{
    marginTop:5,
    borderWidth:1,
    color:'red',
    borderColor:'red',
    paddingLeft:5,
    paddingRight:5
  },
})
export default Idees
