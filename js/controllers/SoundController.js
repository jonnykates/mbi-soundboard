/*global app:true */
app.controller('SoundController', ['$scope', function($scope) {

$scope.selectedTile = 0;

$scope.sounds = [

  {
    id: 'taylor-1',
    title: 'Shake it off',
    coverImage: 'img/taylor-1.png'
  },
  {
    id: 'scooter-1',
    title: 'How much is the fish?',
    coverImage: 'img/scooter-1.png'
  },
  {
    id: 'andy-1',
    title: 'Poor effort',
    coverImage: 'img/andy-1.png'
  },
  {
    id: 'andy-2',
    title: 'Not good enough',
    coverImage: 'img/andy-1.png'
  },
  {
    id: 'orville-1',
    title: 'I wish I could fly',
    coverImage: 'img/orville-1.png'
  },
  {
    id: 'carlyrae-1',
    title: 'Call me maybe',
    coverImage: 'img/carlyrae-1.png'
  },
  {
    id: 'careless-whisper',
    title: 'Careless Whisper',
    coverImage: 'img/careless-whisper.png'
  }

];


$(document).ready(function() {
  var audioElement = document.createElement('audio');
  audioElement.setAttribute('autoplay', 'autoplay');
  //audioElement.load()

  $.get();

  audioElement.addEventListener("load", function() {
    audioElement.play();
  }, true);

  $('.tile').on('click', function() {
    $(this).children('.highlighted-overlay').show().addClass('playing');
    // setTimeout(function() {
    //   $('.tile .highlighted-overlay.playing').removeClass('playing');
    // }, 2000);
    $('.tile .highlighted-overlay.playing').fadeOut(2000, function() {
      $(this).removeClass('playing');
    });

    $scope.selectedTile = $(this).attr('id');
    $scope.$apply();
    audioElement.setAttribute('src', 'sounds/' + $scope.selectedTile + '.mp3');
    audioElement.play();
  });

});

}]);