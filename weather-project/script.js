let city;
let token = '';
let units = '';
let weatherArray = [];
let cityArray = [];

function getDateTime(timeZone) {
    let currentDate = new Date();
    const delta = currentDate.valueOf() + currentDate.getTimezoneOffset() * 60000;

    return new Date(delta + timeZone * 1000).toUTCString();
};

function selectUnits() {
    units = document.getElementById('inputGroupSelect01').value;
    return units;
}


function receiveWeather(city, mode, token) {
    selectUnits();
    const request = fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&mode=json&appid=${token}`);

    return request
        .then(response => {
            console.log(response)
            if (response.ok) {
                return response.json();
            }
            throw Error(response.statusText)
        })
        .then(data => {
            const row = {};

            row['temperature'] = data.main.temp;
            row['humidity'] = data.main.humidity;
            row['wind'] = data.wind.speed;
            row['clouds'] = data.clouds.all;
            row['pressure'] = data.main.pressure;
            row['currentTimeInTheCity'] = getDateTime(data.timezone);

            weatherArray.push(row);
        })
        .catch(reason => {
            document.querySelector('#error').innerText = `${reason} city ${city}`;
        })
}

function insertRowIntoTable() {
    const element = document.querySelector('table.table tbody');
    let toBeInserted = '';

    weatherArray.map(function (item, index) {
        toBeInserted += `<tr>
            <th scope="row">${index + 1}</th>
            <td>${item.temperature}</td>
            <td>${item.humidity}</td>
            <td>${item.wind}</td>
            <td>${item.clouds}</td>
            <td>${item.pressure}</td>
            <td>${item.currentTimeInTheCity + ` ${cityArray[index]}`}</td>
        </tr>`;
    });
    element.innerHTML = toBeInserted;
}

function showTable() {
    document.querySelector('.table').style.visibility = "visible";
}


function analyseAndInsertIntoTable() {
    city = document.getElementById('textForAnalysis').value.toString();
    cityArray.push(city.charAt(0).toUpperCase().concat(city.substring(1)));
    if (city === '') {
        document.querySelector('.input-group div.invalid-feedback.empty').style.display = 'block';
        return;
    }
    if (city.length === 1) {
        document.querySelector('.input-group div.invalid-feedback.minvalue').style.display = 'block';
        return;
    }
    showTable();
    receiveWeather(city, units, token).then(function () {
        insertRowIntoTable();
    });
    document.getElementById('textForAnalysis').value = '';
}

function handleOnFocus() {
    for (const element of document.querySelectorAll('.input-group div.invalid-feedback')) {
        element.style.display = 'none';
    }
}
