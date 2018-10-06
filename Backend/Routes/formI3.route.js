const express = require('express');
const router = express.Router();
const formI3Controller = require('../Controllers/formI3.controller');
const supervisorController = require('../Controllers/supervisor.controller');

router.post('/',function(req,res){
    //console.log(req.body);
    formI3Controller.addFormI3(req.body).then(function(response){
        //.log(response);
        res.status(response.status).send(response.isSuccess);
    }).catch(function(error){
        //console.log(error);
        res.status(error.status).send({message:error.message,isSuccess:error.isSuccess});
    })
});

router.get('/:studentID',function (req,res) {
    formI3Controller.getFormI3Data(req.params.studentID).then(function (response) {
        res.status(response.status).send(response.data);
    }).catch(function (error) {
        res.status(error.status).send(error.error);
    })
});

router.post('/sendFormI3',function(req,res){
    var html = "";
    formI3Controller.getFormI3Data(req.body.studentID).then(function(data){
        html += "<p>Student ID : " + data.data[0].studentID + "</p>";
        html += "<p>Student Name: " + data.data[0].studentName +  "</p>";
        html += "<p>studentAddress: " + data.data[0].studentAddress +  "</p>";
        html += "<p>studentContact: " + data.data[0].studentContact +  "</p>";
        html += "<p>studentEmail: " + data.data[0].studentEmail +  "</p>";
        html += "<p>InternshipTitle: " + data.data[0].InternshipTitle +  "</p>";
        html += "<p>Specialization: " + data.data[0].Specialization +  "</p>";
        html += "<p>PeriodFrom: " + data.data[0].PeriodFrom +  "</p>";
        html += "<p>PeriodTo: " + data.data[0].PeriodTo +  "</p>";
        html += "<p>SupervisorName: " + data.data[0].SupervisorName +  "</p>";
        html += "<p>Date: " + data.data[0].Date +  "</p>";
        html += "<p>KeyTaskSummary: " + data.data[0].KeyTaskSummary +  "</p>";
        html += "<p>TasksCompleted: " + data.data[0].TasksCompleted +  "</p>";
        html += "<p>SupervisorRemarks: " + data.data[0].SupervisorRemarks +  "</p>";

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