const Express = require('express');
const Routes = Express.Router();

const userRoute = require('./Routes/user.route');
const supervisorRoute = require('./Routes/supervisor.route');
const internReportRoute = require('./Routes/intern-report.route');

Routes.use('/user/',userRoute);
Routes.use('/supervisor/',supervisorRoute);

Routes.use('/intern-report/', internReportRoute);

module.exports = Routes;