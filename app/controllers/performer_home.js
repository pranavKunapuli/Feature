angular.module("phiture").controller("PerformerHomeController", function($scope, $location, $routeParams, firebase) {
    var ref = firebase;

    $scope.settings = function() {
        $location.path("/performer_homepage/:id/settings");
    };
});
