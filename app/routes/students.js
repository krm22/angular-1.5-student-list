'use strict'
let PromotionController = require('../controllers/PromotionController')

module.exports = (app) => {
    // Create new controller
    let ctrl = new PromotionController();

    app.get('/students', (req, res, next) => {
        return ctrl.find(req, res, next)
    })

    app.get('/students/:id', (req, res, next) => {
        return ctrl.findById(req, res, next)
    })

    app.post('/students', (req, res, next) => {
        return ctrl.create(req, res, next)
    })

    app.put('/students/:id', (req, res, next) => {
        return ctrl.update(req, res, next)
    });

    app.delete('/students/:id', (req, res, next) => {
        return ctrl.delete(req, res, next)
    })
}
