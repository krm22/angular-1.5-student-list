'use strict'
let mongoose = require('mongoose')

module.exports = mongoose.model('Promotion', new mongoose.Schema({
    name: {
        type: String
    }
}, {
    timestamps: true
}))
