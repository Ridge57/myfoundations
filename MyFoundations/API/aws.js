
module.exports = function awss3(chemin,nom,description,res){

  var AWS = require('aws-sdk');
  const fs = require('fs');
  const BUCKET = 'myfoundations/images_irritants';
  const REGION = 'eu-west-3';
  const ACCESS_KEY = 'AKIAJXSX3TMBFZUDIM7A';
  const SECRET_KEY = '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';

  const imageRemoteName = `Image_${new Date().getTime()}.png`

  AWS.config.update({
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_KEY,
    region: REGION
  })

  var s3 = new AWS.S3()

  s3.putObject({
    Bucket: BUCKET,
    Body: fs.readFileSync(chemin),
    Key: imageRemoteName
  })
    .promise()
    .then(response => {
     /*`${s3.getSignedUrl('getObject', { Bucket: BUCKET, Key: imageRemoteName })}`*/
      console.log(`done! - `, response)
      /*console.log(
        `The URL is ${s3.getSignedUrl('getObject', { Bucket: BUCKET, Key: imageRemoteName })}`
      )*/
      const Report = require('../models/Report_model');
      const report = new Report({
            date :Date.now(),
            filename :nom,
            media : s3.getSignedUrl('getObject', { Bucket: BUCKET, Key: imageRemoteName, Expires: 60*60*24*7 }),
            description :description,
            status :'en cours',
            responsable :'non attribué',
            commentaires :'pas de commentaires',
          });
        report.save()
        ////return response
        /*console.log(
          `The URL is ${s3.getSignedUrl('getObject', { Bucket: BUCKET, Key: imageRemoteName })}`
        )*/
    })
    .then(fs.unlinkSync(chemin))
    .then(response => res.status(201).json({ message: 'Objet enregistré !'}))
    .catch(error => console.log(error))
  //  .catch(error => response.status(400).json({ error }));

}
