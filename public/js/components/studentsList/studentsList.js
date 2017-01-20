((app) => {
    'use strict'
    app.component('studentList', {
        templateUrl: 'js/components/studentsList/studentsList.html',
        controller: ['studentsService', '$state', function(studentsService, $state) {

          let _previous = {}


            studentsService.get().then((res) => {
                this.students = res.data
            })

            studentsService.getPromos().then((res) => {
                this.promos = res.data
            })

            this.add = () => {
                studentsService.save(this.student).then((res) => {
                    this.students.push(res.data)
                    this.student = {}
                })
            }

              this.delete = (student, index) => {
                  studentsService.delete(student).then((res) => {
                    this.students.splice(index, 1)
                    $state.go('student.list')
                })
            }

              this.edit = (student) => {
                if (student.editMode) {
                    studentsService.edit(student).then((res) => {
                        student.editMode = false
                    })
                } else {
                  _previous[student._id] = angular.copy(student)
                    student.editMode = true
                }
            }

             this.cancel = (student, index) => {
                this.students[index] = [student._id]
            }

        }]
    })
})(require('angular').module('app.students'))
