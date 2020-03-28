//Install express server
const express = require('express');
const path = require('path');
const dotenv = require('dotenv').config()
var mongo_express = require('mongo-express/lib/middleware')
var mongo_express_config = require('./mongo_express_config')

const app = express();
// app.use(dotenv)
const env = process.env.PORT || 4000

app.use('/', mongo_express(mongo_express_config))
console.log("configuring Server....")
// Start the app by listening on the default Heroku port
app.listen(env);

console.log("started Server on PORT :"+env)