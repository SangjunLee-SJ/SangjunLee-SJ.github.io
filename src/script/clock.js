const clockTitle = document.getElementById("clock");

function getClock() {
    const todate   = new Date()
    const hours = String(todate.getHours()).padStart(2, "0");
    const minutes = String(todate.getMinutes()).padStart(2, "0");
    const seconds = String(todate.getSeconds()).padStart(2, "0");
    clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock()
setInterval(getClock, 1000)