window.onload = function () {
    let sec = '1';
    setInterval(function () {
        document.getElementById("counter").innerHTML = sec;
        if (sec < '5') {
            sec++;
        }
    }, 1000);
}
