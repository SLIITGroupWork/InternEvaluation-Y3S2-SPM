const Express = require('express');
const Router = Express.Router();
const Controller = require('../Controllers/manager.controller');

Router.post('/',(req,res)=>{
    Controller.scheduleViva(req.body).then((response)=>{
        res.status(response.status).send(JSON.stringify({message:response.message,isSucess:response.isSuccess}));
    }).catch((error)=>{
        res.status(error.status).send(JSON.stringify({message:error.message,isSucess:error.isSuccess}));
    })
})

Router.get('/',(req,res)=>{
    Controller.getVivaSchedule().then((response)=>{
        res.status(response.status).send(JSON.stringify({message:response.message,isSucess:response.isSuccess}));
    }).catch((error)=>{
        res.status(error.status).send(JSON.stringify({message:error.message,isSucess:error.isSuccess}));
    })
})

module.exports = Router;