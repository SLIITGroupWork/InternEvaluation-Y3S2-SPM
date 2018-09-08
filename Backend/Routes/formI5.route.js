const express = require('express');
const router = express.Router();
const formI5Controller = require('../Controllers/formI5.controller');
const supervisorController = require('../Controllers/supervisor.controller');

router.post('/',function(req,res){
    //console.log(req.body);
    formI5Controller.addFormI5(req.body).then(function(response){
        //.log(response);
        res.status(response.status).send(response.isSuccess);
    }).catch(function(error){
        //console.log(error);
        res.status(error.status).send({message:error.message,isSuccess:error.isSuccess});
    })
});

router.get('/:studentID',function (req,res) {
    formI5Controller.getFormI5Data(req.params.studentID).then(function (response) {
        res.status(response.status).send(response.data);
    }).catch(function (error) {
        res.status(error.status).send(error.error);
    })
});

router.post('/sendFormI5',function(req,res){
    var html = "";
    formI5Controller.getFormI5Data(req.body.studentID).then(function(data){
        html += "<p>Student ID : " + data.data[0].studentID + "</p>";
        html += "<p>Student Name: " + data.data[0].studentName +  "</p>";
        html += "<p>Supervisor Name: " + data.data[0].supervisorName +  "</p>";
        html += "<p>description1: " + data.data[0].description1 +  "</p>";
        html += "<p>description2: " + data.data[0].description2 +  "</p>";
        html += "<p>description3: " + data.data[0].description3 +  "</p>";
        html += "<p>description4: " + data.data[0].description4 +  "</p>";
        html += "<p>description5: " + data.data[0].description5 +  "</p>";
        html += "<p>description6: " + data.data[0].description6 +  "</p>";
        html += "<p>description7: " + data.data[0].description7 +  "</p>";
        html += "<p>overallStudentPerformence: " + data.data[0].overallStudentPerformence +  "</p>";
        html += "<p>externalSupervisiorName: " + data.data[0].externalSupervisiorName +  "</p>";
        html += "<p>date: " + data.data[0].date +  "</p>";

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