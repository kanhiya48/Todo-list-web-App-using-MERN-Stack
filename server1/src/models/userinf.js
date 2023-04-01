const mongoose = require('mongoose');

const UserinfSchema = new mongoose.Schema({
  tex: {
    type: Array,
  },
  
});

const Userinf = mongoose.model('userinf', UserinfSchema);

module.exports = Userinf;