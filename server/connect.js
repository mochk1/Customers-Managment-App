const mongoose = require('mongoose');
const uri = "process.ENV.MONGO_URI"
  
const Customer = require('./Customer')


mongoose.connect(uri, {useNewUrlParser: true,useUnifiedTopology: true})
.then(() => {console.log('MongoDB Connected…')})
.catch(err => console.log(err))
mongoose.Promise = global.Promise;

mongoose.connection.on('connected',()=> console.log('it works'))
mongoose.connection.on('error', err => {logError(err);});

