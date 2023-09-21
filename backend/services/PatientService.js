const mongoose=require("mongoose")
const PatientModel=require("../models/PatientModel")
mongoose.connect('mongodb://127.0.0.1:27017/Digirecord')
const PatientService={

    detailsPatient:async(nam,dob,age,bgrp,adrs,mob,eml)=>{
        var user=await PatientModel.findOneAndUpdate({patient_email:eml},{patient_name:nam,patient_dob:dob,patient_age:age,patient_bloodgrp:bgrp,patient_address:adrs,patient_mobile:mob},{new:true,useFindAndModify:false})
        return user
    }
}
module.exports=PatientService;