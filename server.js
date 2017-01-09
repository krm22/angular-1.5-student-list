'use strict'
// Set up ======================================================================
let http = require('http')
let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let methodOverride = require('method-override')
let morgan = require('morgan')
/*let passport = require('passport')*/
/*let cors = require('cors')*/
/*let routes = require('./app/routes')
require('./config/passport')(passport) // pass passport for configuration
const ENV = require('./config/env')[process.env.NODE_ENV || 'development']*/

// Set a static folder used by express. This folder contains our Angular application
app.use(express.static(__dirname + '/public'));
// Set logs
app.use(morgan('combined'));
// Set parser to get the body data request
app.use(bodyParser.urlencoded({
    'extended': 'true'
}))
app.use(bodyParser.json())
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}));
// Override HTTP methods to support DELETE PUT
app.use(methodOverride('X-HTTP-Method-Override'))

/*//CORS
app.use(cors())*/

// Initialize passport used by express for authentication
/*app.use(passport.initialize())

//Load all api routes
app.use('/api', routes(passport))*/

// Connect to mongodb
let mongoose = require('mongoose')
mongoose.connect(ENV.db);

// Middleware to catch all errors
app.use((error, request, response, next) => {
    console.error(error.stack)
    response.status(500).send(error.message)
})

//Export function startServer with port, path and callback params it's used by brunch
exports.startServer = (port, path, callback) => {
    // Create server
    let server = http.Server(app);
    // Listening
    port = process.env.PORT || port
    server.listen(port, callback)
    console.log(`server listening on port ${port}`)

    //Intercept when application killed
    process.on('SIGINT', function() {
        console.log("\nStopping...")
        process.exit()
    });
}
