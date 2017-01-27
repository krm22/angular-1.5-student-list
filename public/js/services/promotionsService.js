((app) => {

  'use strict'
  app.service('promotionsService', function($http) {
      return {
        get() {
            return $http.get('/api/promotions')
        },
        add(promotion) {
            return $http.post('/api/promotions', promotion)
        },
        edit(promotions) {
            return $http.put('/api/promotions/' + promotions._id, promotions)
        },
        delete(promotions) {
            return $http.delete('/api/promotions/' + promotions._id)
        }
      }
  })

})(require('angular').module('app.services'))
