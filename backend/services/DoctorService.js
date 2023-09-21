const mongoose=require("mongoose")
const DoctorModel=require("../models/DoctorModel")
mongoose.connect('mongodb://127.0.0.1:27017/Digirecord')
const DoctorService={

      detailsDoctor:async(nam,desig,hptls,adrs,mob,eml)=>{
        // mongoose.connect('mongodb://127.0.0.1:27017/housekeepingdb')
        var user=await DoctorModel.findOneAndUpdate({doctor_email:eml},{doctor_name:nam,doctor_desig:desig,doctor_hptls:hptls,doctor_address:adrs,doctor_mobile:mob},{new:true,useFindAndModify:false})
        // mongoose.connection.close()
        return user
    }


}
module.exports=DoctorService;