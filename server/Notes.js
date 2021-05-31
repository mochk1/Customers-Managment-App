const mongoose  = require('mongoose');
const { Schema } = mongoose;


const noteSchema = new Schema({
    userid:{type:String},
    date:{type:String},
    noteText: {type:String}
})

const Notes = mongoose.model('Note',noteSchema)

module.exports = Notes;

