const jwt = require('jsonwebtoken')
const Usermodel = require('../models/Usermodel')

const checkuserauth = async(req,res,next)=>
{
    try{
      // console.log('hello auth');
          const {token} = req.cookies
      // console.log(token)
          if(!token)
         {
            res.status(401)
            .json
            ({ status: "failed", message: "Unautherized User😓" });
            res.redirect('/')
    
         }
         else
        {
            const verify = jwt.verify(token,'jyoti@170692')
            // console.log(verify)
            const user = await Usermodel.findOne({_id:verify.ID})
            req.user =user
        //    console.log(emp)
           
           next()
        }
    }
    catch(error)
    {
       console.log(error)
    }
}
module.exports = checkuserauth
