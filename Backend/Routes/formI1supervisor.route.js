const express = require('express');
const router = express.Router();
const formI1SupervisorController = require('../Controllers/formI1supervisor.controller');
const supervisorController = require('../Controllers/supervisor.controller');

router.post('/',function(req,res){
    //console.log(req.body);
    formI1SupervisorController.addFormI1Supervisor(req.body).then(function(response){
        //.log(response);
        res.status(response.status).send(response.isSuccess);
    }).catch(function(error){
        //console.log(error);
        res.status(error.status).send({message:error.message,isSuccess:error.isSuccess});
    })
});

router.get('/:studentID',function (req,res) {
    formI1SupervisorController.getFormI1Supervisor(req.params.studentID).then(function (response) {
        res.status(response.status).send(response.data);
    }).catch(function (error) {
        res.status(error.status).send(error.error);
    })
});

router.post('/sendFormI1Supervisor',function(req,res){
    var html = "";
    formI1SupervisorController.getFormI1Supervisor(req.body.studentID).then(function(data){
        html += "<p>Student ID : " + data.data[0].studentID + "</p>";
        html += "<p>Employer Name: " + data.data[0].employersName +  "</p>";
        html += "<p>Employer Address: " + data.data[0].employersAddress +  "</p>";
        html += "<p>Supervisor Name: " + data.data[0].supervisorName +  "</p>";
        html += "<p>Supervisor Title: " + data.data[0].supervisorTitle +  "</p>";
        html += "<p>Internship Start Date: " + data.data[0].internshipStartDate +  "</p>";
        html += "<p>Internship End Date: " + data.data[0].internshipEndDate +  "</p>";
        html += "<p>No of Hours / Week: " + data.data[0].noHours_Week +  "</p>";
        html += "<p>Supervisor Phone: " + data.data[0].supervisorPhone +  "</p>";
        html += "<p>Supervisor Email: " + data.data[0].supervisorEmail +  "</p>";
        html += "<p>Tasks the students is expected to complete : " + data.data[0].studentExpectedTask +  "</p>";
        html += "<p>Things student will learn during the internship period : " + data.data[0].studentExpectedLearn +  "</p>";
        html += "<p>ExternalSupervisior Name: " + data.data[0].externalSupervisorName +  "</p>";
        html += "<p>Date: " + data.data[0].date +  "</p>";

        var mailParams = {
            senderEmail:req.body.senderEmail,
            subject:"Subject",
            emailBody:html            
        }

        supervisorController.sendMail(mailParams).then(function(response){
            res.status(response.status).send(JSON.stringify({message:response.message,isSuccess:response.isSuccess}));
        }).catch(function(error){
            res.status(error.status).send(JSON.stringify({message:error.message,isSuccess:error.isSuccess}));
        })
    }).catch(function(error){
        res.status(error.status).send(JSON.stringify({message:error.message,isSuccess:error.isSuccess}));
    })
})

module.exports = router;