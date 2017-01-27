'use strict'
let mongoose = require('mongoose')

module.exports = mongoose.model('Student', new mongoose.Schema({
    name: {
        type: String
    },
    lastname: {
        type: String
    },
    age: {
        type: Number
    },
    gitpseudo: {
        type: String
    },
    promotion: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Promotion'
    },
}, {
    timestamps: true
}));
