const Express = require('express');
const Router = Express.Router();
const Controller = require('../Controllers/user.controller');

Router.post('/',function (req,res) {
    Controller.add(req.body).then(function (response) {
        res.status(response.status).send(response.message);
    }).catch(function (reason) {
        res.status(reason.status).send(reason.message);
    })
})

Router.get('/',function (req,res) {
  Controller.viewAll().then(function (response) {
      res.status(response.status).send(response.data);
  }).catch(function (reason) {
      res.status(reason.status).send(reason.message);
  });
})

Router.get('/:ID',function (req,res) {
    Controller.search(req.params.ISBN).then(function (response) {
        res.status(response.status).send(response.data);
    }).catch(function (reason) {
        res.status(reason.status).send(reason.message);
    })
})

module.exports = Router;