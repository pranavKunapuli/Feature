angular.module("phiture").controller("LandingController", function($scope, $location, Firebase) {
    var ref = Firebase;

    $scope.clientLoginRedirect = function() {
        $location.path("/login/0");
    };

    $scope.performerLoginRedirect = function() {
        $location.path("/login/1");
    };

    $scope.signupRedirect = function() {
        $location.path("/signup");
    };
});
