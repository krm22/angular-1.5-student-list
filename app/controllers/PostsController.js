'use strict'
// Require parent class
let Controller = require('./Controller');
// Require model (schema) use with this controller
const Promotion = require('../models/promotion')

class PostsController extends Controller {

    constructor() {
      // Call parent constructor with model param
      super(Promotion)
    }

}

module.exports = PostsController
