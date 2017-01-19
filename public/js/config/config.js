((app) => {
    'use strict'
    app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', ($stateProvider, $urlRouterProvider, $locationProvider) => {
      $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('student', {
                url: '',
                abstract: true,
                templateUrl: 'js/components/students/students.html'
            })
            .state('student.list', {
                url: '/',
                template: '<student-list></student-list>'
            })
            .state('student.item', {
                url: '/:id',
                template: '<student-item></student-item>'
            })
    }])
})(require('angular').module('app.config'))
