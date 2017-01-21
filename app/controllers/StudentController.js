'use strict'
// Require parent class
let Controller = require('./Controller');
// Require model (schema) use with this controller
const Student = require('../models/student')

class StudentController extends Controller {

    constructor() {
      // Call parent constructor with model param
      super(Student)
    }

    find(req, res, next) {
        // Get all documents and filter with queries string (req.query : ex. http://domain.ext/api/?query=string)
        this.model
        .find(req.query)
        .populate('promotion')
        .exec((err, documents) => {
            res.json(documents)
        })
    }
}
module.exports = StudentController
