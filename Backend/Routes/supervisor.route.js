const Express = require('express');
const Router = Express.Router();
const Controller = require('../Controllers/supervisor.controller');

Router.post('/',function (req,res) {
    Controller.sendMail(req.body.email).then(function (response) {
        res.status(response.status).send(response.message);
    }).catch(function (error) {
        res.status(error.status).send(error.message);
    })
})

module.exports = Router;