function init() {
   sec = 0;
    setInterval(step, 1000);
}
function step() {
    if(sec<=4) {
        sec++;
        document.getElementById("timer").childNodes[0].nodeValue = sec;
    }
}