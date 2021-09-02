//temp
function playAudio(url) {
    var music = new Audio(url).pause();
    if(music.paused){
        music = new Audio(url).play();
    }
    else{
        music.pause();    }
}

// var music = new Audio();
// function playMusic(file) {
//     music.pause();
//     music = new Audio(file);
//     music.play();
// }