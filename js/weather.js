const API_KEY = "4dc07e0c681779130bb0d18450ef7a86";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            const temp = Math.floor(data.main.temp);
            weather.innerText = `${temp}℃ / ${data.weather[0].main}`;
    });

}
function onGeoError() {
    alert("내 위치 정보를 허용해주세요.");
}
  
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);