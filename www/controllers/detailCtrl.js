
angular.module('starter')

.controller('detailCtrl', function($scope, $state, $stateParams, $ionicPopup){
  console.log($stateParams);

  $scope.name = $stateParams.name;
  $scope.nick = $stateParams.nick;
  $scope.email = $stateParams.email;
  $scope.mobile = $stateParams.mobile;
  $scope.pic = $stateParams.pic;
  
  $scope.backToMain = function(){
    $state.go('list');
  }

  $scope.phoneCall = function(){
    var confirmPopup = $ionicPopup.confirm({
      title: 'Calling ...',
      template: $stateParams.mobile
    });

    confirmPopup.then(function(res){
      if(res) {
        console.log('OK');
      } else {
        console.log('Cancel');
      }
    });
  }
})