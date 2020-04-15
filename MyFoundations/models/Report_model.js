const mongoose=require("mongoose");
const ReportSchema = mongoose.Schema({

  date :{ type : Date, required:true},
  filename :{ type : String, required:true},
  media :{ type : String, required:true},
  description :{ type : String, required:true},
  status :{ type : String, required:true},
  responsable :{ type : String, required:true},
  commentaires :{ type : String, required:true},
});

module.exports=mongoose.model('Report',ReportSchema);
