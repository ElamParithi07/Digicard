const express=require("express");
const HospitalService = require("../services/HospitalService");
const HospitalRouter = express.Router();
 
HospitalRouter.put('/hospitaldetails',async function(req,res){
    var {hospital_name,hospital_address,hospital_mobile,hospital_email}=req.body
    res.json(await HospitalService.detailshospital(hospital_name,hospital_address,hospital_mobile,hospital_email))
})

HospitalRouter.get('/searchhptl', async (req, res) => {
    const searchQuery = req.query.q;
    const regex = new RegExp(searchQuery, 'i');
    res.json(await HospitalService.searchHospitals(regex));
  });
// HospitalRouter.post('/newuser', async function (req, res) {
//      var user = req.body;
//      var newuser=await HospitalService.signUp(user)
//      res.json(newuser);
// });

// HospitalRouter.post("/user/login", async (req, res) => {
//   var { email,password } = req.body;
//   var user = await HospitalService.login(email,password);
//   if(user!=null)
//       res.send(user);
//   else
//       res.send("invalid");
// });

// HospitalRouter.put('/user',async function(req,res){
//     var {uname,password}=req.body
//     res.json(await HospitalService.changePassword(uname,password))
// })

module.exports= HospitalRouter;