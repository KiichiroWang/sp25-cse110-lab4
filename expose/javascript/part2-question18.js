/*
let d = new Date();
let time = d.toLocaleTimeString();
console.log(time);
*/

const interval = setInterval(timeFunc, 1000);

function timeFunc() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}