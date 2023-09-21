const mongoose=require("mongoose")
const HospitalModel=require("../models/HospitalModel")
mongoose.connect('mongodb://127.0.0.1:27017/Digirecord')
const HospitalService={

    detailsHospital:async(nam,adrs,mob,eml)=>{
        // mongoose.connect('mongodb://127.0.0.1:27017/housekeepingdb')
        var user=await HospitalModel.findOneAndUpdate({hospital_email:eml},{hospital_name:nam,hospital_desig:desig,hospital_address:adrs,hospital_mobile:mob},{new:true,useFindAndModify:false})
        // mongoose.connection.close()
        return user
    },

    searchHospitals:async(hptl)=>{
        const results = await HospitalModel.find({ hospital_name: { $regex: hptl } });
      return results;
    }
}
module.exports=HospitalService;