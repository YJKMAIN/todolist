const time_txt = document.querySelector("#title_container .hours");
const minutes_txt = document.querySelector("#title_container .minutes");
const seconds_txt = document.querySelector("#title_container .seconds");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
;   const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    time_txt.innerText =`${hours}`;
    minutes_txt.innerText =`${minutes}`;
    seconds_txt.innerText =`${seconds}`;
}

getClock();
setInterval(getClock,1000);