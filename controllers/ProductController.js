const ProductModel= require('../models/Productmodel')
// const auth = require('../middleware/auth')
const bcrypt = require('bcrypt')
const cloudinary = require('cloudinary').v2;
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer');
cloudinary.config({ 
    cloud_name: 'deqjjzjbh', 
    api_key: '618227314277568', 
    api_secret: 'UUvM_uxm9lm5RiaXw_5zgwwlIQs',
    
  });

class ProductController
{
  

   static display = async(req,res)=>
   {
   try 
   {
    const data = await ProductModel.find()
    res.status(401)
                        .json({ success:true,
                      data
                    });
   } 
   catch (error) 
   {
    console.log(error)
   }
   }
   static view = async(req,res)=>
   {
   try 
   {
    const data = await ProductModel.findById(req.params.id)
    res.status(401)
                        .json({
                           success:true,
                           data
                    })
   } 
   catch (error) 
   {
    console.log(error)
   }
   }

   static delete = async(req,res)=>
    {
        try 
        {
           await ProductModel.findByIdAndDelete(req.params.id)
           res.status(401)
                        .json
                        ({ status: "failed", message: "Delete successfully😓" });
            
        } 
        catch (error) 
        {
            console.log(error)
        }
    }
   
}
module.exports=ProductController
