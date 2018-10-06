const mongoose = require('../DBSchemas/schemas');
const formI3Schema = mongoose.model('FormI3');
var formI3Controller = function(){
    this.addFormI3 = function(body){
        //console.log(body);
        return new Promise(function(resolve,reject){
            const formI3 = new formI3Schema({
                studentID:body.studentID, //{studentID:angular_value}
                studentName:body.studentName,
                studentAddress:body.studentAddress,
                studentContact:body.studentContact,
                studentEmail:body.studentEmail,
                InternshipTitle:body.InternshipTitle,
                Specialization:body.Specialization,
                PeriodFrom:body.PeriodFrom,
                PeriodTo:body.PeriodTo,
                SupervisorName:body.SupervisorName,
                Date:body.Date,
                KeyTaskSummary:body.KeyTaskSummary,
                TasksCompleted:body.TasksCompleted,
                SupervisorRemarks:body.SupervisorRemarks
            });

            formI3.save().then(function(){
                resolve({status:200,message:"FormI3 saved successfully",isSuccess:true})
            }).catch(function(error){
                reject({status:500,message:error,isSuccess:false});
            });
        });
    },
    this.getFormI3Data = function(studentID){
        return new Promise(function (resolve,reject) {
            formI3Schema.find({studentID:studentID}).exec().then(function (item) {
                resolve({status:200,data:item,isSuccess:true});
            }).catch(function (error) {
                reject({status:500,error:"error occured in server",isSuccess:false});
            })
        })
    }
}

module.exports = new formI3Controller();