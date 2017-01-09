'use strict'
// Require parent class
let Controller = require('./Controller');
// Require model (schema) use with this controller
const Promotion = require('../models/promo')

class PromotionController extends Controller {

    constructor() {
      // Call parent constructor with model param
      super(Promotion)
    }

}

module.exports = PromotionController
