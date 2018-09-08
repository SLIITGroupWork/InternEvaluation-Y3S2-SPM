const Express = require('express');
const Router = Express.Router();
const Controller = require('../Controllers/user.controller');

Router.post('/',function (req,res) {
    Controller.add(req.body).then(function (response) {
        res.status(response.status).send(JSON.stringify({message:response.message,isSuccess:response.isSuccess}));
    }).catch(function (reason) {
        res.status(reason.status).sendJSON.stringify({error:reason.message,isSuccess:reason.isSuccess});
    })
})

Router.get('/',function (req,res) {
  Controller.viewAll().then(function (response) {
      res.status(response.status).send(JSON.stringify({data:response.data,isSuccess:response.isSuccess}));
  }).catch(function (reason) {
      res.status(reason.status).send(JSON.stringify({error:reason.message,isSuccess:reason.isSuccess}));
  });
})

Router.get('/:ID',function (req,res) {
    Controller.search(req.params.ISBN).then(function (response) {
        res.status(response.status).send(JSON.stringify({data:response.data,isSuccess:response.isSuccess}));
    }).catch(function (reason) {
        res.status(reason.status).send(JSON.stringify({error:reason.message,isSuccess:reason.isSuccess}));
    })
})

module.exports = Router;