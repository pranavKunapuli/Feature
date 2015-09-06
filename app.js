var phiture = angular.module("phiture", ["ngRoute"]);

phiture.factory("Firebase", function() {
    var ref = new Firebase("https://phiture.firebaseio.com");
    return ref;
});

phiture.config(["$routeProvider", function($routeProvider) {
    $routeProvider.
        when("/", {
            templateUrl: "app/templates/landing.html",
            controller: "LandingController"
        }).
        when("/login/:loginID", {
            templateUrl: "app/templates/login.html",
            controller: "LoginController"
        }).
        when("/signup/:signupID", {
            templateUrl: "app/templates/signup.html",
            controller: "SignUpController"
        })
        otherwise({
            redirectTo: "/"
        });
}]);
