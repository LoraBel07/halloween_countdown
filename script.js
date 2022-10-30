function halloweenCountdown() {
    const partyDate = new Date ("October 31, 2022 19:00");
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


const images = ['1c.png', '2c.png', '3c.png', '4c.png', '5c.png', '6c.png', '7c.png', '8c.png', '9c.png', '10c.png', '11c.png', '12c.png', '14c.png', '15c.png', '16c.png', '17c.png', '18c.png', '19c.png', '20c.png', '21c.png', '22c.png', '23c.png', '24c.png', '25c.png', '27c.png', '28c.png', '29c.png', '30c.png', '31c.png','32c.png', '33c.png', '34c.png', '36c.png', '37c.png', '38c.png', '39c.png', '40c.png', '41c.png', '42c.png', '43c.png', '44c.png', '45c.png'];

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