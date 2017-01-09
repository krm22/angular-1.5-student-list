'use strict'
let PostsController = require('../controllers/PostsController')

module.exports = (app) => {
    // Create new controller
    let ctrl = new PostsController();

    app.get('/students', (req, res, next) => {
      Student.find({}).populate('promotion').exec(function(err, students) {
          if (err) {
              return res.status(500).json({
                  message: err.message
              });
          }
          res.json(students);
      });
      return ctrl.find(req, res, next)
    })

    app.get('/students/:id', (req, res, next) => {
      Promotion.findById(req.params.id).populate('student').exec(function(err,student) {
            if (err) {
                return res.status(500).json({
                    message: err.message
                });
            }
            res.json(student);
        });
        return ctrl.findById(req, res, next)
    })

    app.post('/students', (req, res, next) => {
      let student = req.body;
      // student data to database using the student model
      Promotion.create(student, function(err, student) {
          if (err) {
              return res.status(500).json({
                  err: err.message
              });
          }
          res.json({
              'student': student,
              message: 'Student Created'
          });
        return ctrl.create(req, res, next)
    });

    app.put('/students/:id', (req, res, next) => {
      let id = req.params.id;
      let student = req.body;
      if (student && student._id !== id) {
            return res.status(500).json({
                err: 'Ids do not match!'
            })
        Promotion.findByIdAndUpdate(id, student, {
          new: true
      }, function(err, student) {
          if (err) {
              return res.status(500).json({
                  err: err.message
              });
          }
          res.json({
              'promotion': promotion,
              message: 'Promo Updated'
          });
      });
    }
          return ctrl.update(req, res, next)
    });

    app.delete('/students/:id', (req, res, next) => {
      Promotion.findByIdAndRemove(req.params.id, function(err) {
            if (err) {
                res.status(500).json({
                    err: err.message
                });
            } else {
                res.sendStatus(200);
            }
      return ctrl.delete(req, res, next)
    })

}
