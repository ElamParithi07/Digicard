const mongoose=require("mongoose")
const UserModel=require("../models/UserModel")
mongoose.connect('mongodb://127.0.0.1:27017/Digirecord')
const UserService={
    signUp:async(user)=>{

        var pdoc=await UserModel.create(user);
        // mongoose.connection.close()
        return pdoc
    },
    login: async (e, p) => {
        
        var user = await UserModel.findOne({ user_email: e ,user_password:p});
        console.log(e,p);
        console.log(user);
        // mongoose.connection.close();
        return user;
      },
      changePassword:async(unm,passwd)=>{
        // mongoose.connect('mongodb://127.0.0.1:27017/housekeepingdb')
        var user=await UserModel.findOneAndUpdate({uname:unm},{password:passwd},{new:true,useFindAndModify:false})
        // mongoose.connection.close()
        return user
    },
    getUserByUserId:async(id)=>{
        // mongoose.connect('mongodb://127.0.0.1:27017/housekeepingdb')
        var user=await UserModel.find({user_userid:id});
        // mongoose.connection.close()
        return user
    }
}
module.exports=UserService;