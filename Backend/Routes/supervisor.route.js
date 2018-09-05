const Express = require('express');
const Router = Express.Router();
const Controller = require('../Controllers/supervisor.controller');

Router.post('/',function (req,res) {
    Controller.sendMail(req.body).then(function (response) {
        res.status(response.status).send(response.message);
    }).catch(function (error) {
        res.status(error.status).send(error.message);
    })
})

Router.get('/:studentID',function (req,res) {
    Controller.getDummyActivity(req.params.studentID).then(function (response) {
        res.status(response.status).send(response.data);
    }).catch(function (error) {
        res.status(error.status).send(error.error);
    })
})

Router.post('/activityDummy/',function (req,res) {
    Controller.saveDummyActivity(req.body).then(function (response) {
        res.status(response.status).send(response.message);
    }).catch(function (error) {
        res.status(error.status).send(error.message);
    })
})

module.exports = Router;