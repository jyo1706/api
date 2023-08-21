const express =  require('express')
const ProductController = require('../controllers/ProductController')
const AdminController = require('../controllers/AdminController')
const checkuserauth = require('../middleware/auth')
const islogin = require('../middleware/islogin')
const routes = express.Router()


routes.get('/display',checkuserauth,ProductController.display)
routes.get('/view/:id',checkuserauth,ProductController.view)
routes.get('/delete/:id',checkuserauth,ProductController.delete)

//AdminController
routes.post('/insert',AdminController.insert)
routes.get('/loginverify',AdminController.verify_login)
routes.get('/logout',AdminController.logout)
routes.get('/get_user_detail/:id',checkuserauth,AdminController.get_user_detail)
routes.get('/get_all_user',checkuserauth,AdminController.get_all_user)
routes.get('/change_password/:id',checkuserauth,AdminController.change_password)


module.exports= routes