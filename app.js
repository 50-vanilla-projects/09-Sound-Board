songbirds = document.querySelector(".songbirds");

songbirds.addEventListener('click', event => {
    console.log(event.target.parentElement.classList[1]);
    song = document.querySelector(`.${event.target.parentElement.classList[1]} audio`);
    console.log(song);
    song.play();
})





/*
<button onclick="play()" type="button">Play </button>
<button onclick="pause()" type="button">Pause</button>
 
<script>
var myMusic= document.getElementById("music");
function play() {
myMusic.play();
}
 
function pause() {
myMusic.pause();
}
</script>
*/