const Express = require('express');
const Router = Express.Router();
const Controller = require('../Controllers/supervisor.controller');

Router.post('/',(req,res) => {
    Controller.sendMail(req.body).then(function (response) {
        res.status(response.status).send(JSON.stringify({message:response.message,isSucess:response.isSuccess}));
    }).catch(function (error) {
        res.status(error.status).send(JSON.stringify({error:error.message,isSuccess:response.isSuccess}));
    })
})

Router.get('/:studentID',(req,res) => {
    Controller.getDummyActivity(req.params.studentID).then(function (response) {
        res.status(response.status).send(JSON.stringify({data:response.data,isSuccess:response.isSuccess}));
    }).catch(function (error) {
        res.status(error.status).send(JSON.stringify({error:error.error,isSuccess:error.isSuccess}));
    })
})

Router.post('/activityDummy/',(req,res) => {
    Controller.saveDummyActivity(req.body).then(function (response) {
        res.status(response.status).send(JSON.stringify({message:response.message,isSuccess:response.isSuccess}));
    }).catch(function (error) {
        res.status(error.status).send(JSON.stringify({message:error.message,isSuccess:error.isSuccess}));
    })
})

Router.post('/sendFormI3/',(req,res) => {
    Controller.getDummyActivity(req.body.studentID).then(function (response) {
        var html = "<p>Student ID :" + req.body.studentID + "</p>";
        html += "<table border = 1><tr><th>Activity</th><th>From</th><th>To</th></tr>";
        html += "<tr><td>" + response.data[0].activity + "</td><td>" + response.data[0].from + "</td><td>" + response.data[0].to + "</td></tr></table>";
        var body = {
            senderEmail: req.body.senderEmail,
            emailSubject: "Form I-3",
            emailBody: html
        }
        Controller.sendMail(body).then(function (response) {
            res.status(response.status).send(response.message);
        }).catch(function (error) {
            res.status(error.status).send(error.message);
        })
    }).catch(function (error) {
        res.status(error.status).send(error.message);
    });
})

module.exports = Router;