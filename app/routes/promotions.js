'use strict'
let PromotionsController = require('../controllers/PromotionsController')

module.exports = (app) => {
    // Create new controller
    let ctrl = new PromotionsController();

    app.get('/promotions', (req, res, next) => {
        return ctrl.find(req, res, next)
    })

    app.get('/promotions/:id', (req, res, next) => {
        return ctrl.findById(req, res, next)
    })

    app.post('/promotions', (req, res, next) => {
        return ctrl.create(req, res, next)
    })

    app.put('/promotions/:id', (req, res, next) => {
        return ctrl.update(req, res, next)
    });

    app.delete('/promotions/:id', (req, res, next) => {
        return ctrl.delete(req, res, next)
    })
}
