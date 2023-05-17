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

var playing = false;


window.addEventListener('click', () => {
  var audioPlayer = document.getElementById("audio-player");
  audioPlayer.muted = false;

  if(playing == false) {
    playedPromise = audioPlayer.play();
    playing = true;
    
    if (playedPromise) {
        playedPromise.catch((e) => {
          playing = false
          console.log("Can't click :L");
         });
     }
  }
});

