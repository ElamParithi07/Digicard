const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/Digirecord')
const PatientModel=mongoose.model('patient',new mongoose.Schema({
    patient_userid:{type:String},
    patient_name:{type:String},
    patient_dob:{type:String},
    patient_bloodgrp:{type:String},
    patient_age:{type:Number},
    patient_address:{type:String}, 
    patient_mobile:{type:Number},
    patient_email:{type:String},
    patient_password:{type:String},
}));
module.exports=PatientModel;