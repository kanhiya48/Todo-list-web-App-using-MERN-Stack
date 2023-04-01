let arr=require('./ardata')
const Userinf=require('../models/userinf')
const mongoose=require('mongoose')
module.exports=async()=>{
 await  mongoose.connect(`mongodb+srv://kanhiya:ipu%403120@kanhiya.uw9ypxc.mongodb.net/userinf?retryWrites=true&w=majority`)
    const alluser=  await  Userinf.find();
   arr.ar=alluser[0].tex;
 await  mongoose.connection.close();
  
}