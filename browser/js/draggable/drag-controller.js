angular.module('ExampleApp', ['ngDraggable']).
    controller('DragCtrl', function ($scope, MixFactory) {

        // $scope.targetLength = 100;
        $scope.mixLength = function(){ return $scope.mix.reduce(function(totalLength, song){
            return totalLength + song.length;
        }, 0) };
        //MB:I stole this Clone from someone on Stack Exchange. I COULD HAVE written it myself so it might as well be my IP, right?
        $scope.Clone = function(original){
            for(var property in original)
                this[property] = (typeof(original[property]) == 'object')? new Clone(original[property]) : original[property];
        };
        $scope.mix = [];
        $scope.addToMix = function (index, song, evt) {
            var copyOfSong;
            //MB:This is NOT to check for multiple of the same song on mix; it is to check if the song is coming from mix or library
            if(song.onMix === false){
                copyOfSong = new $scope.Clone(song);
                copyOfSong.pseudoId = $scope.randomNumber();
                $scope.mix.push(copyOfSong);
                copyOfSong.onMix = true;
            }
            //MB:index is the index of the position where the draggable was dropped
            var originalArray = $scope.mix.slice(0);
            var originIndex;

            //MB:whether it came from the playlist or the library, the draggable is put at the index position it was dropped onto
            if (copyOfSong){
                originIndex = $scope.mix.indexOf(copyOfSong);
                $scope.mix[index] = copyOfSong;
            }
            else{
                originIndex = $scope.mix.indexOf(song);
                $scope.mix[index] = song;
            }
            //MB:shift everything based on the new position of song
            if(index < originIndex){
                for (var idx = originIndex; idx > index; idx--){
                    $scope.mix[idx] = originalArray[idx - 1];
                }
            }
            else{
                for (var idx = originIndex; idx < index; idx++){
                    $scope.mix[idx] = originalArray[idx + 1];
                }
            }
        };
        $scope.addToLibrary = function (index, song, evt) {
            //MB: index is the index of the position where the draggable was dropped
            var originalArray = $scope.library.slice(0);
            var originIndex = $scope.library.indexOf(song);
            //MB:the draggable is put at the index position it was dropped onto
            $scope.library[index] = song;
            //MB:start at the position the draggable came from and shift everything forward/backward
            if(index < originIndex){
                for (var idx = originIndex; idx > index; idx--){
                    $scope.library[idx] = originalArray[idx - 1];
                }
            }
            else{
                for (var idx = originIndex; idx < index; idx++){
                    $scope.library[idx] = originalArray[idx + 1];
                }
            }
        }
    });
