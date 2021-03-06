((app) => {
    'use strict'
    app.component('studentList', {
        templateUrl: 'js/components/studentsList/studentsList.html',
        controller: ['studentsService', '$state', function(studentsService, $state) {

            let _previous = {}

            studentsService.get().then((res) => {
                this.students = res.data
                this.students.forEach((el) => {
                    studentsService.gitUser(el.gitpseudo).then((response) => {
                        el.github = response.data
                    })
                })
            })

            studentsService.getPromos().then((res) => {
                this.promotion = res.data
            })


            this.add = (student) => {
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

            this.edit = (student, index) => {
                if (student.editMode) {
                    studentsService.edit(student).then((res) => {
                        student.editMode = false
                        this.students[index] = res.data
                    })
                } else {
                    _previous[student._id] = angular.copy(student)
                    student.editMode = true
                }
            }

            this.cancel = (student, index) => {
                this.students[index] = _previous[student._id]
            }

        }]
    })
})(require('angular').module('app.students'))
