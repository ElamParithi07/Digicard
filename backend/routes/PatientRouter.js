const express=require("express");
const PatientService = require("../services/PatientService");
const PatientRouter = express.Router();
 
PatientRouter.put('/patientdetails',async function(req,res){
    var {patient_name,patient_dob,patient_age,patient_bloodgrp,patient_address,patient_mobile,patient_email}=req.body
    res.json(await PatientService.detailsPatient(patient_name,patient_dob,patient_age,patient_bloodgrp,patient_address,patient_mobile,patient_email))
})
// PatientRouter.post('/newuser', async function (req, res) {
//      var user = req.body;
//      var newuser=await PatientService.signUp(user)
//      res.json(newuser);
// });

// PatientRouter.post("/user/login", async (req, res) => {
//   var { email,password } = req.body;
//   var user = await PatientService.login(email,password);
//   if(user!=null)
//       res.send(user);
//   else
//       res.send("invalid");
// });

// PatientRouter.put('/user',async function(req,res){
//     var {uname,password}=req.body
//     res.json(await PatientService.changePassword(uname,password))
// })
module.exports= PatientRouter;