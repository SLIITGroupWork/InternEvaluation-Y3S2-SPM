const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const Cors = require('cors');
const UserRouter = require('./routes');

const PORT = 5556;

App.use(BodyParser.json());
App.use(Cors());
App.use('/api',UserRouter);

App.listen(PORT,'localhost',(err) => {
    if(err){
        console.log(err);
        process.exit(-1);
    }
    console.log("Server connected on port " + PORT + "...");
})
