var awss3 = require('../API/aws');

exports.createReport=(req,res,next) => {
  awss3(req.file.path, req.file.filename,req.body.description,res);
};

exports.getAllReports=(req, res, next) => {
  const Report = require('../models/Report_model');
  Report.find()
    .then(things => res.status(200).json(things))
    .catch(error => res.status(400).json({ error }));
};
