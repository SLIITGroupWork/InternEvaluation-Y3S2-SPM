const Express = require('express');
const Routes = Express.Router();

const userRoute = require('./Routes/user.route');
const supervisorRoute = require('./Routes/supervisor.route');

Routes.use('/user/',userRoute);
Routes.use('/supervisor/',supervisorRoute);

module.exports = Routes;