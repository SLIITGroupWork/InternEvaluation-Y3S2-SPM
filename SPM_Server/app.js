const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const Cors = require('cors');
const UserRouter = require('./routes');

const PORT = 8000;

App.use(BodyParser.json());
App.use(Cors());
App.use('/',UserRouter);

App.listen(PORT,'localhost',function (err) {
    if(err){
        console.log(err);
        process.exit(-1);
    }
    console.log("Server connected on port " + PORT);
})