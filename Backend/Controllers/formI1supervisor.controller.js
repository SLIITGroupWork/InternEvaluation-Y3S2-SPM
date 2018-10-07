const mongoose = require('../DBSchemas/schemas');
const formI1SupervisorSchema = mongoose.model('FormI1Supervisor');

var formI1SupervisorController = function(){
    this.addFormI1Supervisor = function(body){
        //console.log(body);
        return new Promise(function(resolve,reject){
            const formI1Supervisor = new formI1SupervisorSchema({
                studentID: body.studentID,
                employersName: body.employersName,
                employersAddress: body.employersAddress,
                supervisorName: body.supervisorName,
                supervisorTitle: body.supervisorTitle,
                internshipStartDate: body.internshipStartDate,
                internshipEndDate: body.internshipEndDate,
                noHours_Week: body.noHours_Week,
                supervisorPhone: body.supervisorPhone,
                supervisorEmail: body.supervisorEmail,
                //List of the tasks the students is expected to complete 
                studentExpectedTask: body.studentExpectedTask,
                //List what the student will learn during the internship period 
                studentExpectedLearn: body.studentExpectedLearn,
                externalSupervisorName: body.externalSupervisorName,
                //Date the Supervisor/Employer Fills the Form-I 
                date: body.date
               
            });

            formI1Supervisor.save().then(function(){
                resolve({status:200,message:"FormI1Supervisor added successfully",isSuccess:true})
            }).catch(function(error){
                reject({status:500,message:error,isSuccess:false});
            });
        });
    },
    this.getFormI1Supervisor = function(studentID){
        return new Promise(function (resolve,reject) {
            formI1SupervisorSchema.find({studentID:studentID}).exec().then(function (item) {
                resolve({status:200,data:item,isSuccess:true});
            }).catch(function (error) {
                reject({status:500,error:"error occured in server",isSuccess:false});
            })
        })
    }
}

module.exports = new formI1SupervisorController();