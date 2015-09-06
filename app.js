var phiture = angular.module("phiture", ["ngRoute", "firebase"]);

phiture.factory("firebase", function() {
    var ref = new Firebase("https://phiture.firebaseio.com/");
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
        }).
        when("/client_homepage", {
            templateUrl: "app/templates/client_homepage.html",
            controller: "ClientHomeController"
        }).
        when("/performer_homepage", {
            templateUrl: "app/templates/performer_homepage.html",
            controller: "PerformerHomeController"
        }).
        otherwise({
            redirectTo: "/"
        });
}]);
