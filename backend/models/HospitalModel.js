const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/Digirecord')
const HospitalModel=mongoose.model('hospital',new mongoose.Schema({
    hospital_userid:{type:String,},
    hospital_name:{type:String,},
    hospital_address:{type:String}, 
    hospital_mobile:{type:Number},
    hospital_email:{type:String},
    hospital_password:{type:String},
}));
module.exports=HospitalModel;