songbirds = document.querySelector(".songbirds");

songbirds.addEventListener('click', event => {
    allSongs = document.querySelectorAll("audio");
    allSongs.forEach(element => {
        element.pause();
        console.log("paused");
    });
    console.log(event.target.parentElement.classList[1]);
    song = document.querySelector(`.${event.target.parentElement.classList[1]} audio`);
    console.log(song);
    song.play();
})