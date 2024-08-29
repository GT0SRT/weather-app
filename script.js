const apiKey = 'cdae17daa1b812b60afd00411bb1fa50';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric';

let temp = document.querySelector('.temp');
let humid = document.querySelector('.humidity');
let ws = document.querySelector('.wind');
let icon = document.querySelector('.wicon');

let searchbox = document.querySelector('#locationInput');
let searchbtn = document.querySelector('#searchBtn');

async function checkweather(city) {
    const response = await fetch(apiUrl + `&q=${city}` +`&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector('.error').style.display="block";
        document.querySelector('.weather-info').style.display="none";
    }
    else{
        let data = await response.json();
        document.querySelector('.city').innerHTML = data.name;
        temp.innerHTML = Math.round(data.main.temp)+"°C";
        humid.innerHTML = Math.round(data.main.humidity)+"%";
        ws.innerHTML = Math.round(data.wind.speed)+"km/h";
        icon.innerHTML = `<img src="${(data.weather[0].main)+".png"}" alt="" class="wicon">`;
        document.querySelector('.weather-info').style.display = "block";
        document.querySelector('.error').style.display="none";
    }
}

searchbtn.addEventListener('click',function(){
    checkweather(searchbox.value);
})