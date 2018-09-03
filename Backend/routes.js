const Express = require('express');
const Routes = Express.Router();

const userRoute = require('./Routes/user.route');

Routes.use('/user/',userRoute);

module.exports = Routes;