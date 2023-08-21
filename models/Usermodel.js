const mongoose = require('mongoose')
const UserSchema = mongoose.Schema({
    name:
    {
        type:String,
        required:true,
    },
    email:
    {
        type:String,
        required:true,
    },
    password:
    {
        type:String,
        required:true,
    },
    // image:
    // {
    //     public_id:
    //     {
    //         type:String,
    //     },
    //     url:
    //     {
    //         type:String,
    //     }
    // }
},{timestamps:true})
const UserModel =new mongoose.model('user',UserSchema)
module.exports=UserModel