const mongoose=require("mongoose");
const IdeaSchema = mongoose.Schema({
  date :{ type : Date, required:true},
  description :{ type : String, required:true},
  status :{ type : String, required:true},
  commentaires :{ type : String, required:true},
  emetteur :{ type : String, required:true},
});

module.exports=mongoose.model('Idea',IdeaSchema);
