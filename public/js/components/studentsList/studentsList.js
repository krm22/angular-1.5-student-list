((app) => {
    'use strict'
    app.component('studentList', {
        templateUrl: 'js/components/students/studentList/studentList.html',
        controller: ['studentsService', function(studentsService) {


            this.add = () => {
                studentsService.add(this.student).then((res) => {
                    // when this request receive response we change state to app.blog.list (redirection to list)
                    $state.go('student.list')
                })
            }




            this.save = () => {
                // Call save method form PostsService with post
                studentsService.save(this.student).then((res) => {
                    // Change editMode value to false
                    this.editMode = false
                    if (!this.student._id) {
                        // if it's new post (when post._id doesn't exist) we affect to post variable response data (post created)
                        this.student = res.data
                    }
                })
            }

            this.delete = () => {
                // Call delete method form PostsService with post
                studentsService.delete(this.student).then((res) => {
                    // when this request receive response we change state to app.blog.list (redirection to list)
                    $state.go('student.list')
                })
            }
        }]
    })
})(require('angular').module('app.students'))
