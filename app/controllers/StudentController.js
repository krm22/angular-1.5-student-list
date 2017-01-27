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
        .find(req.query.id)
        .populate('promotion')
        .exec((err, documents) => {
            res.json(documents)
        })
    }
    create(req, res, next) {
        // Create a document with data from body request (req.body)
        this.model.create(req.body, (err, document) => {
            if (err) {
                next(err)
            } else {
                this.model
                .findById(document._id, {
                  password: 0
                })
                .populate('promotion')
                .exec((err, student) => {

                  res.json(student)
                })

            }
        })
    }

    update(req, res, next) {
        // Update a document by request param, this param need to be id with data from body request (req.body)
        this.model.update({
            _id: req.params.id
        }, req.body, (err) => {
            if (err) {
                next(err)
            } else {
              this.model
              .findById(req.params.id, {
                password: 0
              })
              .populate('promotion')
              .exec((err, student) => {

                res.json(student)
              })
            }
        })
    }

}
module.exports = StudentController
