const mongoose = require('mongoose')
const live_Url="mongodb+srv://jyotiuser:jyoti1706@cluster0.j4lrbou.mongodb.net/blogapi?retryWrites=true&w=majority"

const connectdb =()=>{ mongoose.connect(live_Url,{
    
}).then((data)=>
{
    console.log(`Mongodb connected with server:${data.connection.host}`);
})
.catch((error)=>{
    console.log(error)
})
}
module.exports= connectdb
