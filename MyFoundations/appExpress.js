const express = require('express');
const appExpress = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const reportsRoutes = require('./routes/reportsRoutes');
const ideasRoutes = require('./routes/ideasRoutes');

//Connection à la base de donnée
mongoose.connect('mongodb+srv://appuser:eD6rNXlbZdf2Jyn3@cluster0-qglmg.mongodb.net/myfoundations?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


//Défintions des CORS
appExpress.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

appExpress.use(bodyParser.json());

appExpress.use('/reports', reportsRoutes);
appExpress.use('/ideas', ideasRoutes);
//appExpress.use('/api/auth', userRoutes);

//Export du fichier
module.exports = appExpress;
