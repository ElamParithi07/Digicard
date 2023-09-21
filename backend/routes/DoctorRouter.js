const express=require("express");
const DoctorService = require("../services/DoctorService");
const DoctorRouter = express.Router();
 
// DoctorRouter.post('/newdoctor', async function (req, res) {
//     var { name,email,password } = req.body;
//      var newuser=await DoctorService.signUp(name,email,password)
//      res.json(newuser);
// });

// DoctorRouter.post("/user/login", async (req, res) => {
//   var { email,password } = req.body;
//   var user = await DoctorService.login(email,password);
//   if(user!=null)
//       res.send(user);
//   else
//       res.send("invalid");
// });

DoctorRouter.put('/doctordetails',async function(req,res){
    var {doctor_name,doctor_desig,doctor_hptls,doctor_address,doctor_mobile,doctor_email}=req.body
    res.json(await DoctorService.detailsDoctor(doctor_name,doctor_desig,doctor_hptls,doctor_address,doctor_mobile,doctor_email))
})



module.exports= DoctorRouter;