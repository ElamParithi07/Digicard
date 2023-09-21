const express=require("express");
const UserService = require("../services/UserService");
const PatientModel = require("../models/PatientModel");
const DoctorModel = require("../models/DoctorModel");
const HospitalModel = require("../models/HospitalModel");
const UserRouter = express.Router();
 
UserRouter.post('/newuser', async function (req, res) {
  try {
    var user = req.body;
    var existingUser = await UserService.getUserByUserId(user.user_userid);
    console.log(existingUser);
    if(Object.keys(existingUser).length!=0){
        res.json({message:"invalid"});
    }
    else{
      var newuser = await UserService.signUp(user);

        if (user.user_role === "Patient") {
            var patient = {
                patient_userid: user.user_userid,

                patient_name: user.user_name,
                patient_email: user.user_email,
                patient_password: user.user_password
            }
            var pdoc = await PatientModel.create(patient);
        }
        else if(user.user_role==="Doctor")
        {
          var doctor={
              doctor_userid: user.user_userid,
              doctor_name: user.user_name,
              doctor_email:user.user_email,
              doctor_password:user.user_password
          }
          var ddoc=await DoctorModel.create(doctor);
       }
       else if(user.user_role==="Hospital") {
          var hospital={
              hospital_userid: user.user_userid,
              hospital_name: user.user_name,
              hospital_email:user.user_email,
              hospital_password:user.user_password
          }
          var hdoc=await HospitalModel.create(hospital);
       }

        res.json(newuser);
      
    }
    
} catch (error) {
  res.status(500).json({ message: 'An error occurred while creating the user' });
}
});

UserRouter.post('/userlogin', async function (req, res) {
    var { user_email,user_password } = req.body;
   var user = await UserService.login(user_email,user_password);
   if(user!=null)
       res.json(user);
   else
       res.send("invalid");


});

UserRouter.get('/allusers',async function (req, res) {
   var user = await UserService.getAllUsers();
   res.json(user);
});
module.exports= UserRouter;




