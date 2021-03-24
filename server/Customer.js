const mongoose  = require('mongoose');
const { Schema } = mongoose;


const CustomerSchema = new Schema({
    date: { type: Date, default: Date.now },
    name: {type:String, required: [true, 'Name field is required']},
    email: {type:String},
    projects: [{year:Number, projectname:String, amount: Number}]

})

const Customer = mongoose.model('Customer',CustomerSchema)

module.exports = Customer;