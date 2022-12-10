function halloweenCountdown() {
    const partyDate = new Date ("October 31, 2023 19:00");
    const now = new Date();
    const diff = partyDate - now;
    console.log(diff);

    const msInSecond = 1000;
    const msInMinute = 60 * 1000;
    const msInHour = 60 * 60 * 1000;
    const msInDay = 24 * 60 * 60 * 1000;

    const displayDay = Math.floor(diff/msInDay);
    document.querySelector(".days").textContent = displayDay; 

    const displayHour = Math.floor((diff%msInDay)/msInHour);
    document.querySelector(".hours").textContent = displayHour;

    const displayMinute = Math.floor((diff%msInHour)/msInMinute);
    document.querySelector(".minutes").textContent = displayMinute;

    const displaySecond = Math.floor((diff%msInMinute)/msInSecond);
    document.querySelector(".seconds").textContent = displaySecond; 

    if (diff <=0) {
        document.querySelector(".days").textContent = 0;
        document.querySelector(".hours").textContent = 0;
        document.querySelector(".minutes").textContent = 0;
        document.querySelector(".seconds").textContent = 0;    
        clearInterval(timerID);
        happyHalloween();
    }
}
let timerID = setInterval(halloweenCountdown,1000);

function happyHalloween() {
    const heading = document.querySelector("h1");
    heading.textContent = "🎃 HAVE FUN and ENJOY! 👻";
    heading.classList.add("fun");
}
const button = document.querySelector("#myButton");
button.addEventListener("click", function() {
    document.querySelector("#myAudio").play();
});
const buttonTwo = document.querySelector("#myButtonTwo");
buttonTwo.addEventListener("click", function() {
    document.querySelector("#myAudio").pause();
});


const images = ['pic/1c.png', 'pic/2c.png', 'pic/3c.png', 'pic/4c.png', 'pic/5c.png', 'pic/6c.png', 'pic/7c.png', 'pic/8c.png', 'pic/9c.png', 'pic/10c.png', 'pic/11c.png', 'pic/12c.png', 'pic/14c.png', 'pic/15c.png', 'pic/16c.png', 'pic/17c.png', 'pic/18c.png', 'pic/19c.png', 'pic/20c.png', 'pic/21c.png', 'pic/22c.png', 'pic/23c.png', 'pic/24c.png', 'pic/25c.png', 'pic/27c.png', 'pic/28c.png', 'pic/29c.png', 'pic/30c.png', 'pic/31c.png','pic/32c.png', 'pic/33c.png', 'pic/34c.png', 'pic/36c.png', 'pic/37c.png', 'pic/38c.png', 'pic/39c.png', 'pic/40c.png', 'pic/41c.png', 'pic/42c.png', 'pic/43c.png', 'pic/44c.png', 'pic/45c.png'];

const costumes = document.querySelector("#costumes");
const img = costumes.querySelector("#img");

let i = 1;
img.src = images[0];
window.setInterval(function() {
    img.src = images[i];
    i++;

    if (i === images.length) {
        i = 0;
    }

}, 3000);