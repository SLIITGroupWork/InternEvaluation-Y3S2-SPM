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
    supervisorTitle:{
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

<<<<<<< HEAD
//Defining Supervisor Schema - Form - I Supervisor Schema
const FormI1SupervisorSchema = new Schema({

    //A unique studentID field to identify a collection 
    studentID:{
        type:String,
        required:true
    },
    employersName:{
        type:String,
        required:true
    },
    employersAddress:{
        type:String,
        required:true
    },
    supervisorName:{
        type:String,
        required:true
    },
    supervisorTitle:{
        type:String,
        required:true
    },
    internshipStartDate:{
        type:String,
        required:true
    },
    internshipEndDate:{
        type:String,
        required:true
    },
    noHours_Week:{
        type:Number,
        required:true
    },
    supervisorPhone:{
        type:String,
        required:true
    },
    supervisorEmail:{
        type:String,
        required:true
    },
    //List of the tasks the students is expected to complete 
    studentExpectedTask:{
        type:String,
    },
    //List what the student will learn during the internship period 
    studentExpectedLearn:{
        type:String,
    },
    externalSupervisorName:{
        type:String,
        required:true
    },
    //Date the Supervisor/Employer Fills the Form-I 
    date:{
        type:String,
        required:true
    }


});


=======
const vivaSchedule = new Schema({
   batch:{
       type:String,
       required:true
   },
   specialization:{
       type:String,
       required:true
   },
   scheduleDate:{
       type:Date,
       required:true
   },
   allocationTime:{
       type:Number,
       required:true
   },
   endDate:{
       type:Date,
       required:true
   }
});

>>>>>>> dev

Mongoose.model('FormI1Supervisor',FormI1SupervisorSchema);
Mongoose.model('User', User);
Mongoose.model('ActivityDummy', ActivityDummy);

Mongoose.model('InternReport', internReportSchema);
Mongoose.model('FormI5',FormI5);

Mongoose.model('VivaSchedule',vivaSchedule);

Mongoose.connect('mongodb://localhost:27017/internDB', (err) => {
    if (err) {
        console.log(err);
        process.exit(-1);
    }
    console.log('MongoDB server has started...');
});

module.exports = Mongoose;