const jwt = require('jsonwebtoken');
const mongoose=require('mongoose');
const arr=require('./ardata');
module.exports =async (req, res) => {
  console.log(req.body.password)
//  console.log(ar,"kjvfjvkb");
  const otp=arr.ar.find(function(uid){
    return uid===req.body.password
  })
  console.log(otp,"jhhvf")
  if (otp!==undefined) {
   await mongoose.connect(`mongodb+srv://kanhiya:ipu%403120@kanhiya.uw9ypxc.mongodb.net/${otp}?retryWrites=true&w=majority`)
    const token = jwt.sign({
      userId: 1,
    }, process.env.SECRET);
    res.json({
      token,
    });
  } else {
    res.status(401).send('Wrong password');
  }
}