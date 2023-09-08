
const today = new Date();

const day = today.getDay();

const dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

document.querySelector(".day").innerHTML = dayList[day];


function updateUTCTime() {
    const currentUTCTime = Date.now();
    document.querySelector('[data-testid="currentUTCTime"]').textContent = currentUTCTime;
}
updateUTCTime();

setInterval(updateUTCTime, 1000); 
