const token = ''

function getWeather()
{

    let city = document.querySelector('input').value;
    let measurement = document.querySelector('select').value;
    console.log(measurement);
    const request = fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${measurement}&mode=json&appid=${token}`);

    request
        .then(response => {
            console.log(response);
            if (response.ok) {
                return response.json()
            }
            throw Error(response.statusText)
        })
        .then(json => {
            console.log(json);
            document.querySelector('#city').innerText = json.name;
            document.querySelector('#temp').innerText = json.main.temp;
            document.querySelector('#humidity').innerText = json.main.humidity;
            document.querySelector('#wind').innerText = json.wind.speed;
            document.querySelector('#clouds').innerText = json.clouds.all;
            document.querySelector('#pressure').innerText = json.main.pressure;
            let hour =new Date().getUTCHours();
            let min = new Date().getUTCMinutes();
            let sec = new Date().getUTCSeconds()
            document.querySelector('#current_time').innerText = (json.timezone/3600 + hour) + ':' + min +':' + sec ;
        })
        .catch(reason => {
            console.log(reason);
            document.querySelector('#error').innerText = reason;
        })
}
