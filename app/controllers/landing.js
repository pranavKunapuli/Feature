angular.module("phiture").controller("LandingController", function($scope, $location, firebase) {
    var ref = firebase;

    $scope.clientLoginRedirect = function() {
        $location.path("/login/0");
    };

    $scope.performerLoginRedirect = function() {
        $location.path("/login/1");
    };

    $scope.clientSignupRedirect = function() {
        $location.path("/signup/0");
    };

    $scope.performerSignupRedirect = function() {
        $location.path("/signup/1");
    };
});
