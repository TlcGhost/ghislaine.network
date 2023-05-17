var thumbnailImages = document.querySelectorAll(".thumbnail-image");
var fullscreenImage = document.querySelector("#fullscreen-image img");

for (var i = 0; i < thumbnailImages.length; i++) {
  thumbnailImages[i].addEventListener("click", function() {
    fullscreenImage.src = this.src;
    document.getElementById("fullscreen-image").style.display = "flex";
  });
}

document.getElementById("fullscreen-image").addEventListener("click", function() {
  document.getElementById("fullscreen-image").style.display = "none";
});


var audioPlayer = document.getElementById("audio-player");
var playButton = document.getElementById("play-button");

playButton.addEventListener("click", function() {
  audioPlayer.play();
  playButton.style.display = "none";
});

audioPlayer.addEventListener("play", function() {
  playButton.style.display = "none";
});

audioPlayer.addEventListener("pause", function() {
  playButton.style.display = "block";
});