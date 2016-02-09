app.config(function($stateProvider) {
    // Register our *about* state.
    $stateProvider.state('about', {
        url: '/user/1',
        controller: 'AboutController',
        templateUrl: 'js/about/about.html'
    });

});

app.controller('AboutController', function($scope, FullstackPics) {
    // Images of beautiful Fullstack people.
});
