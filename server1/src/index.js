const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const ardata=require('./routes/ardata')
const router = require('./router');
const getarr=require('./routes/getarr')
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

app.use(router);
getarr();
// mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('starting on port 8080');
  app.listen(8080);
// })