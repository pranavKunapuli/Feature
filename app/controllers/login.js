angular.module("phiture").controller("LoginController", ["$scope", "$routeParams", "$location", "firebase", function($scope, $routeParams, $location, firebase) {
    var ref = firebase;
    $scope.loginType = $routeParams.loginID;

    $scope.clientLogin = function() {
        console.log("client login");
    };

    $scope.performerLogin = function() {
        console.log("perfomer login");
    };
}]);
