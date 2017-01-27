((app) => {
    'use strict'
    app.component('promotion', {
    templateUrl: 'js/components/common/promotion.html',
    controller: ['promotionsService', '$state', function(promotionsService, $state){
        this.promotions = []
         this.add = () => {
           console.log(this.promotion)
            promotionsService.add(this.promotion).then((res) => {
            this.promotions.push(res.data)
              this.promotion = {}
          })
        }
    }]
  })
})(require('angular').module('app.students'))
