const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

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

const FormI5 = new Schema({
    studentID:{
        type:String,
        required:true
    },
    studentName:{
        type:String,
        required:true
    },
    employerName:{
        type:String,
        required:true
    },
    supervisorName:{
        type:String,
        required:true
    },
    description1:{
        type:String,
        required:true
    },
    description2:{
        type:String,
        required:true
    },
    description3:{
        type:String,
        required:true
    },
    description4:{
        type:String,
        required:true
    },
    description5:{
        type:String,
        required:true
    },
    description6:{
        type:String,
        required:true
    },
    description7:{
        type:String,
        required:true
    },
    overallStudentPerformence:{
        type:String,
        required:true
    },
    externalSupervisiorName:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }
});
const ActivityDummy = new Schema({
    studentID: {
        type: String,
        required: true
    },
    activity: {
        type: String,
        required: true
    },
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    }
});

const internReportSchema = new Schema({
    studentId: String,
    introduction: {
        companyOverview: String,
        projectOverview: String,
        glossary: [{
            abbreviation: String,
            description: String
        }]
    },
    internshipInsight: {
        objectives: String,
        procedures: String,
        methodology: String
    },
    learningOutcome: {
        learning: String,
        measurableOutcome: String,
        effectivenessEffort: String
    },
    sampleWork: [{
        title: String,
        description: String
    }]
});

//Form-I Student Schema
const Student = new Schema({
    studentID:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    homePhone:{
        type:String,
        required:true
    },
    mobilePhone:{
        type: String,
        required: true
    },
    email: [{type: String}],
    semester: {
        type: Number,
        required: true
    },
    year:{
        type: Number,
        required: true
    },
    cgpa:{
        type: Number,
        required: true
    }

});


Mongoose.model('Student',Student);
Mongoose.model('Book', Books);
Mongoose.model('Author', Author);
Mongoose.model('User',User);
Mongoose.model('ActivityDummy',ActivityDummy);
Mongoose.model('InternReport', internReportSchema);
Mongoose.model('FormI5',FormI5);

Mongoose.connect('mongodb://localhost:27017/internDB', (err) => {
    if (err) {
        console.log(err);
        process.exit(-1);
    }
    console.log('MongoDB server has started...');
});

module.exports = Mongoose;