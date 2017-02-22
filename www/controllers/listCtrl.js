
angular.module('starter')

.controller('listCtrl', function($scope, $state){
  $scope.datas = [
    {
      id: '1',
      name: 'Sanya Thammawong',
      nick: 'Kobe',
      email: 'sanyath007@gmail.com',
      mobile: '080-7390254',
      pic: '20160130_202111.jpg'
    },
    {
      id: '2',
      name: 'Kanjana Thammawong',
      nick: 'Pui',
      email: 'kanjana_puy@hotmail.com',
      mobile: '081-0736804',
      pic: '20160130_202838.jpg'
    },
    {
      id: '3',
      name: 'Saranya Thammawong',
      nick: 'Query',
      email: 'query@gmail.com',
      mobile: '080-7390254',
      pic: '20170115_205523.jpg'
    }
  ];

  $scope.showDetail = function(data){
    $state.go('detail', {
      name: data.name,
      nick: data.nick,
      email: data.email,
      mobile: data.mobile,
      pic: data.pic
    });
  }
})