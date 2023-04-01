const TodoModel = require('../models/TodoModel');
let arr=require('./ardata')

const Userinf=require('../models/userinf')

const mongoose = require('mongoose');
module.exports = async (req, res) => {
  const {text} = req.body;
  const otp=arr.ar.find(function(uid){
    return uid===text
  })
  if(otp===undefined)
  {
    arr.ar.push(text);
   console.log(arr.ar);
  await mongoose.connect(`mongodb+srv://kanhiya:ipu%403120@kanhiya.uw9ypxc.mongodb.net/${text}?retryWrites=true&w=majority`)
 await mongoose.connection.close();
 await mongoose.connect(`mongodb+srv://kanhiya:ipu%403120@kanhiya.uw9ypxc.mongodb.net/userinf?retryWrites=true&w=majority`)
   const temp=await Userinf.find();
  await Userinf.updateOne({"_id":temp[0]._id},{$set:{"tex":arr.ar}})
  console.log(temp[0]);
 
   await mongoose.connection.close();
   res.setHeader('Content-Type', 'application/json');
  res.status(200).send(JSON.stringify("0"));
  // console.log("donenot present")
  }
  else{
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(JSON.stringify ('1'));
    // console.log("done")
  }
};