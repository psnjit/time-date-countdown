let releaseDate = new Date('May 1, 2024');
let elements= document.querySelectorAll('.launch-time div p');
let timer;

function showTimer() {
    console.log("time");
    let today = new Date();

    let difference = releaseDate - today;

    if(difference<0){
        clearInterval(timer);

        elements[0].textContent="00";
        elements[1].textContent="00";
        elements[2].textContent="00";
        elements[3].textContent="00";

        return;
    }

    // Calculate days, hours, minutes, and seconds
    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    elements[0].textContent=days;
    elements[1].textContent=hours;
    elements[2].textContent=minutes;
    elements[3].textContent=seconds;

}

timer=setInterval(showTimer, 1000);