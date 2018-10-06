const Express = require('express');
const Routes = Express.Router();

const userRoute = require('./Routes/user.route');
const supervisorRoute = require('./Routes/supervisor.route');
const formI5Route = require('./Routes/formI5.route');
const internReportRoute = require('./Routes/intern-report.route');
const vivaSchedule = require('./Routes/manager.route');

Routes.use('/user/',userRoute);
Routes.use('/supervisor/',supervisorRoute);
Routes.use('/intern-report/', internReportRoute);
Routes.use('/formI5/',formI5Route);
Routes.use('/viva/',vivaSchedule);

module.exports = Routes;