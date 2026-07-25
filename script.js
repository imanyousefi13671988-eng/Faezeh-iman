const target = new Date("2026-09-20T20:00:00");

setInterval(() => {

const now = new Date();

const diff = target - now;

document.getElementById("days").innerHTML =
Math.floor(diff/86400000);

document.getElementById("hours").innerHTML =
Math.floor(diff/3600000)%24;

document.getElementById("minutes").innerHTML =
Math.floor(diff/60000)%60;

document.getElementById("seconds").innerHTML =
Math.floor(diff/1000)%60;

},1000);

const music=document.getElementById("music");

music.addEventListener("play",()=>{
if(music.currentTime<4)
music.currentTime=4;
});
