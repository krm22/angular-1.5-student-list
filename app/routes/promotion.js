'use strict'
let PromotionController = require('../controllers/PromotionController')

module.exports = (app) => {
    // Create new controller
    let ctrl = new PromotionController();

    app.get('/promotion', (req, res, next) => {
        return ctrl.find(req, res, next)
    })

    app.get('/promotion/:id', (req, res, next) => {
        return ctrl.findById(req, res, next)
    })

    app.post('/promotion', (req, res, next) => {
        return ctrl.create(req, res, next)
    })

    app.put('/promotion/:id', (req, res, next) => {
        return ctrl.update(req, res, next)
    });

    app.delete('/students/:id', (req, res, next) => {
        return ctrl.delete(req, res, next)
    })
}
