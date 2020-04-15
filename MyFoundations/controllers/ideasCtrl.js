

exports.createIdea=(req,res,next) => {
  const Idea = require('../models/Idea_model');
  const idea = new Idea({
    date :Date.now(),
    description :req.body.description,
    status :'en cours',
    commentaires :'pas de commentaires',
    emetteur :'Emetteur standard',
  })
    idea.save()
    .then(response => res.status(201).json({ message: 'saisie enregistré !'}))
    .catch(error => res.status(400).json({ error }));
  }

exports.getAllIdeas=(req, res, next) => {
  const Idea = require('../models/Idea_model');
  Idea.find()
    .then(things => res.status(200).json(things))
    .catch(error => res.status(400).json({ error }));
};
