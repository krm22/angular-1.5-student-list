((app) => {
    'use strict'
    app.service('studentsService', function($http) {
        return {
            get(){
                // HTTP Request method GET to our express API
                return $http.get('/api/students')
            },

            getPromos() {
               return $http.get('/api/promotions')
            },
            getPromoName(promotion) {
                return $http.get('/api/promotions').then(function(response) {
                this.promotion.name = response.data;
              })
            },
            getById(id) {
                // HTTP Request method GET with param (post id) to our express API
                return $http.get('/api/students/' + id)
            },
            save(student) {
                if (student._id) {
                    // HTTP Request method PUT (update) with param and data (post) to our express API
                    return $http.put('/api/students/' +  student._id, student)
                } else {
                    // HTTP Request method POST (create) with data (post) to our express API
                    return $http.post('/api/students', student)
                }
            },

            edit(student) {
                return $http.put('/api/students/' + student._id, student)
            },

            delete(student){
                // HTTP Request method DELETE (delete) with param (post id) to our express API
                return $http.delete('/api/students/' + student._id)
            }

        }
    })
})(require('angular').module('app.services'))
