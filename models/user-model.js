const mongoose = require('mongoose');



const userSchema = mongoose.Schema({
   fullname:{
             type:String,
             minlength:3,
             trim:true,
            },
   email:String,
   password:String,
   cart:{
          type:Array,
          default:[]
        },
   isadmin:Booleanoolean,
   orders :{
            type:Array,
             default:[]
           },
   conatct : Number,
   picture : String
});


module.exports = mongoose.model("user",userSchema);