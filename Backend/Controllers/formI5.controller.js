const mongoose = require('../DBSchemas/schemas');
const formI5Schema = mongoose.model('FormI5');
var formI5Controller = function(){
    this.addFormI5 = function(body){
        //console.log(body);
        return new Promise(function(resolve,reject){
            const formI5 = new formI5Schema({
                studentID:body.studentID,
                studentName:body.studentName,
                employerName:body.employerName,
                supervisorName:body.supervisorName,
                description1:body.description1,
                description2:body.description2,
                description3:body.description3,
                description4:body.description4,
                description5:body.description5,
                description6:body.description6,
                description7:body.description7,
                overallStudentPerformence:body.overallStudentPerformence,
                externalSupervisiorName:body.externalSupervisiorName,
                date:body.date
            });

            formI5.save().then(function(){
                resolve({status:200,message:"FormI5 added successfully",isSuccess:true})
            }).catch(function(error){
                reject({status:500,message:error,isSuccess:false});
            });
        });
    },
    this.getFormI5Data = function(studentID){
        return new Promise(function (resolve,reject) {
            formI5Schema.find({studentID:studentID}).exec().then(function (item) {
                resolve({status:200,data:item,isSuccess:true});
            }).catch(function (error) {
                reject({status:500,error:"error occured in server",isSuccess:false});
            })
        })
    }
}

module.exports = new formI5Controller();