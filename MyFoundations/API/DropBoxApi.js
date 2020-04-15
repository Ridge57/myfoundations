const API_TOKEN= "IIvxsurmj_YAAAAAAAAAYf3unM0U-uux2xXhxAXvCnVt1sQpDQBtnnNa8HWYG-rd"


export function saveImageOnDropBox(data){
  return fetch('https://content.dropboxapi.com/2/files/upload', {
        method: "POST",//Request Type
        body: data,//post body
        headers: {//Header Defination
          'Content-Type': 'application/octet-stream',
          "Authorization": "Bearer " + API_TOKEN,
          "Dropbox-API-Arg": "{\"path\":\"/Photos_Irritants/" + data.fileName + "\"}"
        },
      })
      .then((response) => response.json())
      //If response is in json then in success
      .then((responseJson) => {
        return(responseJson)
      })
      //If response is not in json then in error
      .catch((error) => {
        console.error('REF 3 ' + error);
      });
}

export function saveImageLinkOnDataBase(fichier){
var data = "{\"path\": \"/Photos_Irritants/" + fichier.fileName + "\",\"settings\": {}}"
  return fetch('https://api.dropboxapi.com/2/sharing/create_shared_link_with_settings', {
      method:"POST",
      body:data,
      headers: {//Header Defination
          "Authorization": "Bearer " + API_TOKEN,
          "Content-Type": "application/json"
        },
      })
      .then((response) => response.json())
      //If response is in json then in success
      .then((responseJson) => {
          //console.log('REF 1 ' + JSON.stringify(responseJson));
          return (responseJson)
      })
      //If response is not in json then in error
      .catch((error) => {
        console.error('REF 2 ' + error);
      });
}
