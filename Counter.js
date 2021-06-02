const mongoose  = require('mongoose');
const { Schema } = mongoose;


const CounterSchema = new Schema({
    _id:{type:String},
    count: {type:Number, default:1}
})

const Counter = mongoose.model('Counter',CounterSchema)

module.exports = Counter;