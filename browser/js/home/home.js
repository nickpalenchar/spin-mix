app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'js/home/home.html',
        controller: 'HomeCtrl',
        resolve: {
            tracks: function(HomeFactory) {
                //console.log("[resolve] starting..", $stateParams);
                return HomeFactory.getTracks();
            }
        }
    })
        .state('home.welcome', {
            url: "",
            templateUrl: 'js/home/states/welcome.html',
            controller: function($scope, $state){
                $scope.wizard = function(){ $state.go('home.wizard'); }
            }
        })
        .state('home.wizard', {
            url: "",
            templateUrl: 'js/home/states/wizard.html',
            controller: 'wizardController'
        })
});

app.controller('HomeCtrl', function ($scope, $state, HomeFactory, tracks) {
    // this is a test to see that we can get all tracks
    $state.transitionTo('home.welcome');
    $scope.tracks = tracks;
    var idCounter = 0;

    $scope.tracks.forEach(function (track) {
        track.waveID = 'wave' + idCounter;
        console.log('waveID: ', track.waveID);
        idCounter++;
    });

    console.log('tracks: ', $scope.tracks);

    $scope.tracks.forEach(function (track) {
        track.src = '/api/tracks/' + track._id.toString() + '.audio';
    });

    $scope.playTrack = function(track) {
        HomeFactory.play(track);
    };

});
app.controller('wizardController', function($scope){

});
