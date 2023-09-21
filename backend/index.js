const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose=require("mongoose")
const express = require("express");
const PatientRouter = require("./routes/PatientRouter");
const HospitalRouter = require("./routes/HospitalRouter");
const DoctorRouter = require("./routes/DoctorRouter");
const UserRouter = require("./routes/UserRouter");
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(HospitalRouter);
app.use(DoctorRouter);
app.use(UserRouter);
app.use(PatientRouter);
mongoose.connect('mongodb://127.0.0.1:27017/Digirecord')
//'mongodb+srv://Elamparithi:QIMethZSR3PyKjFS@cluster1.ky9ozla.mongodb.net/?retryWrites=true&w=majority'
app.listen(8082,()=>{
    console.log("Server started!!!")
});