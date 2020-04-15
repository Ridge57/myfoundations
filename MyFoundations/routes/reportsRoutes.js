const express= require('express');
const router= express.Router();
//const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const reportsCtrl = require('../controllers/reportsCtrl');

router.post('/newreport', multer, reportsCtrl.createReport);
router.get('/reportinglist', reportsCtrl.getAllReports);
//router.get('/getone', stuffCtrl.getOneThing);

module.exports=router;
