const Express = require('express');
const Routes = Express.Router();

const userRoute = require('./Routes/user.route');
const supervisorRoute = require('./Routes/supervisor.route');

//Form-I Student Details
const studentRoute = require('./Routes/student.route');

Routes.use('/user/',userRoute);
Routes.use('/supervisor/',supervisorRoute);
Routes.use('/student/',studentRoute);

module.exports = Routes;