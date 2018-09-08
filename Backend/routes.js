const Express = require('express');
const Routes = Express.Router();

const userRoute = require('./Routes/user.route');
const supervisorRoute = require('./Routes/supervisor.route');
const formI5Route = require('./Routes/formI5.route');

Routes.use('/user/',userRoute);
Routes.use('/supervisor/',supervisorRoute);
Routes.use('/formI5/',formI5Route);
module.exports = Routes;