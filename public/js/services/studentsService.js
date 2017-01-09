((app) => {
    'use strict'
    app.service('studentsService', function($http) {
        return {
            get() {
                // HTTP Request method GET to our express API
                return $http.get('/api/students')
            },
            getById(id) {
                // HTTP Request method GET with param (post id) to our express API
                return $http.get('/api/students/' + id)
            },
            save(student) {
                if (student._id) {
                    // HTTP Request method PUT (update) with param and data (post) to our express API
                    return $http.put('/api/students/' + post._id, post)
                } else {
                    // HTTP Request method POST (create) with data (post) to our express API
                    return $http.post('/api/students', post)
                }
            },
            delete(student) {
                // HTTP Request method DELETE (delete) with param (post id) to our express API
                return $http.delete('/api/students/' + post._id)
            }
        }
    })
})(require('angular').module('app.services'))
