const mongoose = require('mongoose')

const personSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    }, 
    phone : {
        type : String,
        required : true
    }, 
    work : {
        type : String,
        required : true,
        enum : ['student', 'teacher', 'principle']
    }
})

const Person = mongoose.model('person', personSchema);
// module.exports = mongoose.models.person || mongoose.model('person', personSchema);
module.exports = Person
