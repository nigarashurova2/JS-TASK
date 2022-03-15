const sec = document.querySelector(".second");
const min = document.querySelector(".minute");
const hrs = document.querySelector(".hour");
function saat () {
    let time = new Date();
    let secs = time.getSeconds() * 6;
    let mins = time.getMinutes() * 6;
    let hrs = time.getHours() * 30;
    sec.style.transform = `rotateZ(${secs}deg)`;
    min.style.transform = `rotateZ(${mins}deg)`;
    hr.style.transform = `rotateZ(${hrs + (mins/12)}deg)`;
}
setInterval(saat,1000);
























// const deg = 6;
// const hr = document.querySelector('.hour');
// const mn = document.querySelector('.minute');
// const sc = document.querySelector('.second');

// setInterval(() => {
//     let day = new.Date();
//     let hh = day.getHours() * 30;
//     let mm = day.getMinutes() * deg;
//     let ss = day.getSeconds() * deg;

//     hr.style.transform = `rotateZ(${(hh) + (mm/12)})`;
//     mn.style.transform = `rotateZ($ {mm}deg)`;
//     sc.style.transform = `rotateZ(${ss}deg)`;
// })