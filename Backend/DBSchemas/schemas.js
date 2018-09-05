const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const Books = new Schema({
    Name: {
        type: String,
        required: true
    },
    ISBN: {
        type: String,
        required: true
    },
    Author: {
        type: String,
        required: true
    },
    PublishedYear: {
        type: String,
        required: true
    },
    Publisher: {
        type: String,
        required: true
    },
    Price: {
        type: Number,
        required: true
    }
});

const Author = new Schema({
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    }
});

const User = new Schema({
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    BirthDay: {
        type: String,
        required: true
    }
});


const ActivityDummy = new Schema({
   studentID:{
       type:String,
       required:true
   },
   activity:{
       type:String,
       required:true
   },
   from:{
       type:String,
       required:true
   },
   to:{
       type:String,
       required:true
   }
});

Mongoose.model('Book', Books);
Mongoose.model('Author', Author);
Mongoose.model('User',User);
Mongoose.model('ActivityDummy',ActivityDummy);
Mongoose.connect('mongodb://localhost:27017/internDB', function (err) {
    if (err) {
        console.log(err);
        process.exit(-1);
    }
    console.log('MongoDB Server Has Started Successfully');
});

module.exports = Mongoose;