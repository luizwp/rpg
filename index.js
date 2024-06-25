document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('audio-player');
    var playButton = document.getElementById('play');
    var pauseButton = document.getElementById('pause');
    var stopButton = document.getElementById('stop');

    playButton.addEventListener('click', function() {
        audio.play();
    });

    pauseButton.addEventListener('click', function() {
        audio.pause();
    });

    stopButton.addEventListener('click', function() {
        audio.pause();
        audio.currentTime = 0;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var videoButton = document.getElementById('videoPlay');

    play.addEventListener('click', function() {
        videoButton.play()
    });

});