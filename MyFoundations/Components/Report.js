//Components/Report.js

import React from 'react'
import {Text,TextInput,View,Button,Image,StyleSheet,TouchableOpacity, Alert} from 'react-native'
import ImagePicker from 'react-native-image-picker'
import { saveImageOnDropBox, saveImageLinkOnDataBase } from '../API/DropBoxApi'

class Report extends React.Component {
  constructor (props) {
    super(props);
    this.myTextInput = React.createRef();
    this.data = new FormData();
    this.description = 'test';
    this.state = {
          media: require('../Images/photo.png'),
    }
    this._chooseimage = this._chooseimage.bind(this)
    this._savedata = this._savedata.bind(this)
  }

  _onChangeText(text){
    this.description=text;
  }

  _chooseimage() {
      // Ici nous appellerons la librairie react-native-image-picker pour récupérer une image
      var options = {
         title: 'Select Image',
         storageOptions: {
          skipBackup: true,
          path: 'images'
        }};
      ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('L\'utilisateur a annulé')
      }
      else if (response.error) {
        console.log('Erreur : ', response.error)
      }
      else {
        const source = { uri: response.uri };

          this.data.append('name', 'avatar');
          this.data.append('image', {
           uri : response.uri,
           type: response.type,
           name: response.fileName
          });
        this.setState({
          media: source,
        });
      }
    })
    }
    _resetreport(){
      this.setState({
        media: require('../Images/photo2.png')
      })
      this.myTextInput.current.clear();
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

     _savedata=async()=>{
          this.data.append('description', this.description)
          fetch('http://192.168.1.23:3000/reports/newreport', {
          method: 'POST',
          headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
          },
          body: this.data,

          })
          .then(() => {
            this._resetreport();
            this._displayAlert();
            this.data = new FormData();
          })
          .catch((error) => {
            console.error(error);
          });
        }

    displayMenu=()=>{
      this.props.navigation.navigate('Accueil')
    }
  render(){
    return(
        <View style={styles.main_container}>
            <View>
            <TouchableOpacity onPress={()=>this.displayMenu()}><Image style={styles.photo_menu} source={require('../Images/menu.png')}/></TouchableOpacity>
            <Text style={styles.titre}>Saisir un irritant </Text>
            </View>

            <TouchableOpacity style={styles.touchableOpacity} onPress={this._chooseimage}>
            <Image style={styles.photo} source={this.state.media}/>
            </TouchableOpacity>

            <View style={styles.section_anomalie}>
              <TextInput style={styles.description_anomalie}
              placeholder="Description de l'anomalie..." multiline onChangeText={text => this._onChangeText(text)}
              ref={this.myTextInput}/>

              <View style={styles.bouttons}>

                <TouchableOpacity onPress={()=>this._savedata()}>
                <Image source={require('../Images/valider.png')}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this._resetreport()}>
                <Image source={require('../Images/annuler.png')}/>
                </TouchableOpacity>
              </View>
            </View>
        </View>
)
}
}

const styles=StyleSheet.create({
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
  main_container:{
    flex:1,
    alignItems:'center',
    backgroundColor:'#FFFFFF'
  },
  section_anomalie:{
    marginTop:25,
    borderWidth:2,
    borderColor:'#FFFFFF',
    borderTopColor:'#78E5F4',
    alignItems:'center'
  },
  description_anomalie:{
    fontSize:20,
    height:220,
    width:325,
    paddingTop:15,
    paddingBottom:10,
    paddingLeft:10,
    paddingRight:10,
    textAlignVertical : "top", //only works on android
    borderWidth:2,
    borderColor:'#FFFFFF',
  },
  bouttons: {
    marginTop:15,
    flexDirection:'row',
    width:300,
    justifyContent:'space-around'
  },
  touchableOpacity:{
    marginTop:25,
    height :200,
    width:325,
    borderWidth:1,
    backgroundColor:'#FFFFFF',
    justifyContent:'center',
    alignItems:'center'
  },
  photo: {
   width: 150,
   height: 150,
 }
})
export default Report
