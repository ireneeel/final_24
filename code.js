function showPopup(imageSrc) {
    var popup = document.getElementById("popup");
    var popupImage = document.getElementById("popup-image");
    popup.style.display = "block";
    popupImage.src = imageSrc;
    popup.addEventListener("click", function() {
        popup.style.display = "none";
    });
}

const playPauseBtn = document.getElementById('play-pause-btn');
const audioPlayer = document.getElementById('audio-player');

function togglePlayPause() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseBtn.innerHTML = '<img src="images/pauseit.svg" style="width: 28px; height: 28px;">'; // pause icon
  } else {
    audioPlayer.pause();
    playPauseBtn.innerHTML = '<img src="images/playit.svg" style="width: 28px; height: 28px; margin-left: 3px;">'; // play icon
  }
}

playPauseBtn.addEventListener('click', togglePlayPause);