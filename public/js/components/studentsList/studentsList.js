((app) => {
    'use strict'
    app.component('studentList', {
        templateUrl: 'js/components/studentsList/studentsList.html',
        controller: ['studentsService', '$state', function(studentsService, $state) {

            studentsService.get().then((res) => {
                this.students = res.data
            })

            this.add = () => {
                studentsService.save(this.student).then((res) => {
                    this.students.push(res.data)
                })
            }

            this.save = () => {
                studentsService.save(this.student).then((res) => {
                    this.editMode = false
                    if (!this.student._id) {
                        this.student = res.data
                    }
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
                  student.editMode = true
              }
            }

             this.cancel = (student, index) => {
                this.students[index] = [student._id]
            }

        }]
    })
})(require('angular').module('app.students'))


/*   <this.edit = (student) => {
                if (student.editMode) {
                    studentsService.edit(student).then((res) => {
                        student.editMode = false
                    })
                } else {
                    _previous[student._id] = angular.copy(student) // on fait une copie du student dans un objet previous et avec comme valeur tout l'bjet
                    student.editMode = true
                }
            }
*/
