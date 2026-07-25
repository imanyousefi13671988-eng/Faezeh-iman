function openEnvelope(){

document.getElementById("envelopeScreen").style.display="none";

document.getElementById("invite").style.display="block";


// شروع موزیک از ثانیه ۴
let music=document.getElementById("music");

music.currentTime=4;

music.play();

}



// شمارش معکوس

let target=new Date("2026-09-20T20:00:00");


setInterval(()=>{

let now=new Date();

let diff=target-now;


if(diff<=0)return;


document.getElementById("days").innerHTML=
Math.floor(diff/(1000*60*60*24));


document.getElementById("hours").innerHTML=
Math.floor(diff/(1000*60*60)%24);


document.getElementById("minutes").innerHTML=
Math.floor(diff/(1000*60)%60);


document.getElementById("seconds").innerHTML=
Math.floor(diff/1000%60);


},1000);
