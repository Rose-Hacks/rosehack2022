//temp
function myFunction() {
    var x = document.getElementById("Demo");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
  }

// var music = new Audio();
// function playMusic(file) {
//     music.pause();
//     music = new Audio(file);
//     music.play();
// }