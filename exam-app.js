'use strict'
let port = process.env.PORT || 8006
let server = require('./server.js')

server.startServer(port)
