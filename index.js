function newYearCountdown() {
    const newYearDate = new Date ("January 1, 2024 00:00");
    const now = new Date();
    const diff = newYearDate - now;
    

    const msInSeconds = 1000;
    const msInMinutes = 60 * 1000;
    const msInHours = 60 * 60 * 1000;
    const msInDays = 24 * 60 * 60 * 1000;


    const displayDay = Math.floor(diff/msInDays);
    document.querySelector(".days").textContent = displayDay

    const displayHours = Math.floor((diff%msInDays) / msInHours);
    document.querySelector(".hours").textContent = displayHours;

    const displayMinutes = Math.floor((diff%msInHours) / msInMinutes);
    document.querySelector(".minutes").textContent = displayMinutes;

    const displaySeconds = Math.floor((diff%msInMinutes) / msInSeconds);
    document.querySelector(".seconds").textContent = displaySeconds;

    if (diff <= 0) {
        document.querySelector(".days").textContent = 0;
        document.querySelector(".hours").textContent = 0;
        document.querySelector(".minutes").textContent = 0;
        document.querySelector(".seconds").textContent = 0;
        clearInterval(timerID);
        newYear();
    }


}
let timerID = setInterval(newYearCountdown, 1000);


function newYear() {
    const heading = document.querySelector("h1");
    heading.textContent = "HAPPY NEW YEAR!!!";
    heading.classList.add("red");
}

const button = document.querySelector("#myButton");
const audio = document.querySelector("#myAudio");

button.addEventListener("click", function() {
    if (audio.paused) {
        audio.play();
        button.classList.toggle("pause");
    }

    else {
        audio.pause();
        button.classList.toggle("pause");
    }
})



const back = document.querySelector("#back");
const next = document.querySelector("#next");

const songs = ["https://cdn.glitch.global/089e2b64-5ce8-49cd-9cbf-02be14053590/Grieg.mp3?v=1667589524433", "https://cdn.glitch.global/089e2b64-5ce8-49cd-9cbf-02be14053590/Prokofiev.mp3?v=1667589537581", "https://cdn.glitch.global/089e2b64-5ce8-49cd-9cbf-02be14053590/Beethoven.mp3?v=1667589518624"];

let i = 0;

next.addEventListener("click", () => {
    i++;
    if (i > songs.length - 1) {
        i = 0;
    }
    document.querySelector("#myAudio").src = songs[i];
})

back.addEventListener("click", () => {
    i--;
    if (i < 0) {
        i = songs.length - 1
    }
    document.querySelector("#myAudio").src = songs[i];
})