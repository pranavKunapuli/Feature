angular.module("phiture").controller("SignUpController", function($scope, $routeParams, $location, firebase) {
    var ref = firebase;
    $scope.signupType = $routeParams.signupID;

    $scope.clientSignUp = function() {
        $scope.userType = "Clients";
        $scope.signUp();
    }

    $scope.performerSignUp = function() {
        $scope.userType = "Performers";
        $scope.signUp();
    }

    $scope.signUp = function() {
        ref.createUser({
            email: $scope.email,
            password: $scope.password
        }, function(error, userData) {
            if(error) {
                alert("A user with that email already exists. Try logging in!");
            } else {
                ref.child($scope.userType).push({
                    "first_name": $scope.first_name,
                    "last_name": $scope.last_name,
                    "email": $scope.email,
                    "timestamp": Firebase.ServerValue.TIMESTAMP
                });
                alert($scope.userType + " user created successfully");
            }
        });

        if($scope.userType == "Clients") {
            $location.path("/client_homepage");
        } else {
            $location.path("/performer_homepage");
        }
    };
});
