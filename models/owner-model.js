const mongoose = require('mongoose');



const ownerSchema = mongoose.Schema({
   fullname:{
             type:String,
             minlength:3,
             trim:true,
            },
   email:String,
   password:String,
   prducts :{
            type:Array,
             default:[]
           },
   gstin : String,
   pictuure : String
});


module.exports = mongoose.model("owner",ownerSchema);