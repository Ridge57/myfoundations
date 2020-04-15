import React from 'react'
import {Text,TextInput,View,Button,Image,StyleSheet,TouchableOpacity} from 'react-native'
import ImagePicker from 'react-native-image-picker'

class Photo_anomalie extends React.Component{

constructor (props) {
  super(props);
  this.state = {
        photo_anomalie: require('../Images/photo2.png')
  }
  this._chooseimage = this._chooseimage.bind(this)
}

_chooseimage() {
    // Ici nous appellerons la librairie react-native-image-picker pour récupérer une image
    ImagePicker.showImagePicker({}, (response) => {
    if (response.didCancel) {
      console.log('L\'utilisateur a annulé')
    }
    else if (response.error) {
      console.log('Erreur : ', response.error)
    }
    else {
      console.log('Photo : ', response.uri )
      let requireSource = { uri: response.uri }
      this.setState({
        photo_anomalie: requireSource
      })
    }
  })
  }

  render() {
    return(
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={this._chooseimage}>
          <Image style={styles.photo} source={this.state.photo_anomalie} />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
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
export default Photo_anomalie
