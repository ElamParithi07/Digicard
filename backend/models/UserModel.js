const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/Digirecord')
const UserModel=mongoose.model('user',new mongoose.Schema({
    user_userid:{type:String,required:true,unique:true},
    user_name:{type:String,required:true,},
    user_email:{type:String,required:true,unique:true},
    user_password:{type:String,required:true},
    user_role:{type:String,required:true}
}));
module.exports=UserModel;