angular.module("phiture").controller("LoginController", ["$scope", "$routeParams", "$location", "firebase", function($scope, $routeParams, $location, firebase) {
    var ref = firebase;
    $scope.loginType = $routeParams.loginID;

    $scope.clientLogin = function() {
        var clients = ref.child("Clients");
        clients.once("value", function(snap) {
            snap.forEach(function(data) {
                if(data.val().email == $scope.email) {
                    $scope.login();
                    $location.path("/client_homepage");
                }
            })
        });

        alert("We could not find a client by that email");
    }

    $scope.performerLogin = function() {
        var performers = ref.child("Performers");
        performers.once("value", function(snap) {
            snap.forEach(function(data) {
                if(data.val().email == $scope.email) {
                    $scope.login();
                    $location.path("/performer_homepage");
                }
            })
        });
    }

    $scope.login = function() {
        ref.authWithPassword({
            email: $scope.email,
            password: $scope.password
        }, function(error, userData) {
            if(error) {
                console.log("Error logging user in");
            } else {
                console.log("Successful Login");
            }
        });
    };
}]);
