const mongoose  = require('mongoose');
const { Schema } = mongoose;


const userSchema = new Schema({
 
    username:{type:String},
    password: {type:String}
})

const User = mongoose.model('User',userSchema)

module.exports = User;


