const express= require('express');
const router= express.Router();
//const auth = require('../middleware/auth');
const ideasCtrl = require('../controllers/ideasCtrl');

router.post('/nouvelleidee', ideasCtrl.createIdea);
router.get('/ideaslist', ideasCtrl.getAllIdeas);
//router.get('/getone', stuffCtrl.getOneThing);

module.exports=router;
