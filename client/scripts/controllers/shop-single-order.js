'use strict';


app.controller('SingleOrderCtrl', ['$scope', 'Objective',  '$stateParams', function($scope, Objective, $stateParams) {

    
    
    //get all companies in the database
     $scope.objectives = Objective.find();


  }])

    //delete objective
    .controller('DeleteObjectiveCtrl', ['$scope', 'Objective', '$state',
          '$stateParams', function($scope, Objective, $state, $stateParams) {
                 if (confirm("are you sure you want to delete?") == true) {
        Objective
          .deleteById({id: $stateParams.id})
          .$promise
          .then(function() {
            $state.go('app.shop.single-order');
          });
      }else
               $state.go('app.shop.single-order');
          }]);