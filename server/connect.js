require('dotenv').config();
const mongoose = require('mongoose');
const uri = process.env.MONGO_URI;
const Customer = require('./Customer')
const User = require("./User");

mongoose.connect(uri, {useNewUrlParser: true,useUnifiedTopology: true})
.then(() => {console.log('MongoDB Connected…')})
.catch(err => console.log(err))
mongoose.Promise = global.Promise;

mongoose.connection.on('connected',()=> console.log('it works'))
mongoose.connection.on('error', err => {logError(err);});

