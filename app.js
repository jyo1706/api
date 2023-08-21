const express = require('express')
const app = express()
const dotenv = require('dotenv')
const connectdb = require('./db/connectDb')

const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser')

app.use(express.json())
dotenv.config(
{
    path:'.env'

})

//file upload
app.use(fileUpload({useTempFiles:true}))

// call cookie
app.use(cookieParser())
// show message 


connectdb()
const web =  require('./routes/web')

app.use('/api',web)

app.listen(process.env.PORT,()=>
{
    console.log(`${process.env.PORT} run successfully`);
})