const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/Digirecord')
const DoctorModel=mongoose.model('doctor',new mongoose.Schema({
    doctor_userid:{type:String},
    doctor_name:{type:String},
    doctor_desig:{type:String},
    doctor_hptls:{type:Array},
    doctor_address:{type:String}, 
    doctor_mobile:{type:Number},
    doctor_email:{type:String},
    doctor_password:{type:String},
}));
module.exports=DoctorModel;