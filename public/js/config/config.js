((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider, $urlRouterProvider, $locationProvider) => {

        $stateProvider
            .state('app', {
                url: '/students',
                abstract: true,
                templateUrl: 'js/components/students/students.html'
            })
            .state('app.student.list', {
                url: '/',
                template: '<student-list></student-list>'
            })
            .state('app.student.item', {
                url: '/:id',
                template: '<student-item></student-item>'
            })
    }])
})(require('angular').module('app.students', []))
