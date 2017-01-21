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
                template: '<student-list><navbar></navbar></student-list>'
            })
            .state('student.promotion',{
              url:'/promotions',
              template:'<promotion></promotion>'
            })
    }])
})(require('angular').module('app.config'))
