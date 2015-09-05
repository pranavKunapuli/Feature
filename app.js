var phiture = angular.module("phiture", ["ngRoute"]);

phiture.factory("Firebase", function() {
    var ref = new Firebase("https://phiture.firebaseio.com");
    return ref;
});

phiture.config(["$routeProvider", function($routeProvider) {
    $routeProvider.
        when("/", {
            templateURL: "app/templates/landing.html",
            controller: LandingController
        }).
        otherwise({
            redirectTo: "/"
        });
}]);
