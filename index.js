


const weatherForm =document.querySelector(".weatherform");
const cityInput=document.querySelector(".cityInput");
const card =document.querySelector(".card");
const apiKey ="656a6a9fbc8da36e2f518ba60c430efc";


weatherForm.addEventListener("submit", async event => {

    event.preventDefault();

    const city = cityInput.value;

    if(city){
        try{
            const weatherData = await getWeatherData(city);
            displayWeather(weatherData);
        }
        catch(error){
            console.error(error);
            displayError("Could not get data of the location");
        }
    }
    else{
        displayError("Please enter a city");
    }
});


async function getWeatherData(city) {
    
   
    const apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(apiUrl);

    if(!response.ok){
        throw new Error("Could not fetch weather data");
    }
    return await response.json();
}
function displayWeather(data){
    const {name : city,
        main :{temp,humidity},
        weather :[{description,id}]} =data;

        card.textContent ="";
        card.style.display="flex";

        const cityDis= document.createElement("h1");
        const TempDis = document.createElement("p");
        const humidityDis = document.createElement("p");
        const descDis = document.createElement("p");
        const emoji = document.createElement("p");
        
        cityDis.textContent=city;
        TempDis.textContent=  `${(temp-273.15).toFixed(1)}°C`;
        humidityDis.textContent= `Humidity : ${humidity}%`;
        descDis.textContent = description;
        emoji.textContent = getWeatherEmoji(id); 


        cityDis.classList.add("cityDis");
        TempDis.classList.add("TempDis");
        humidityDis.classList.add("humidityDis");
        descDis.classList.add("descDis");
        emoji.classList.add("emoji");

        card.appendChild(cityDis);
        card.appendChild(TempDis);
        card.appendChild(humidityDis);
        card.appendChild(descDis);
        card.appendChild(emoji);


}
function getWeatherEmoji(weatherId){

    switch(true){
        case (weatherId >= 200 && weatherId < 300):
            return "⚡";
        case (weatherId >= 300 && weatherId < 400):
            return "🌧️";
        case (weatherId >= 500 && weatherId < 600):
            return "🌧️";
        case (weatherId >= 600 && weatherId < 700):
            return "❄️";
        case (weatherId >= 700 && weatherId < 800):
            return "🌁";
        case (weatherId === 800):
            return "☀️";
        case (weatherId >= 801 && weatherId < 810):
            return "⛅";
        default:
            return "❓";
    }
}
function displayError(message){

    const errorDisplay=document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent="";
    card.style.display ="flex";
    card.appendChild(errorDisplay);
}