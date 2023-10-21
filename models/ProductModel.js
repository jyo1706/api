const mongoose = require('mongoose')
const ProductSchema = mongoose.Schema({
    name:
    {
        type:String,
        required:true,
    },
    price:
    {
        type:String,
        required:true,
    },
    
     image:
     {
         public_id:
         {
             type:String,
         },
         url:
         {
             type:String,
        }
     }
},{timestamps:true})
const UserModel =new mongoose.model('product',ProductSchema)
module.exports=ProductModel
