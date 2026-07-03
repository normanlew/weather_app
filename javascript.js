let fahrenheitDisplayed = true;

// get weather data utilizing then / catch
// function getWeatherData(city) {
//     fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=LLQBM5D34LTDXXQ2AR2CKCDVQ`)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(response) {
//         const temp = response.currentConditions.temp;
//         const conditions = response.currentConditions.conditions;
//         console.log(temp);
//         console.log(conditions);
//     })
//     .catch(function(err) {
//         alert(err);
//     });
// }

// get weather data utilizing async / await
async function getWeatherData(city) {
    const data = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=LLQBM5D34LTDXXQ2AR2CKCDVQ`);
    const jsonData = await data.json();
    console.log(jsonData);
    return jsonData;
    console.log(jsonData);
    const temp = jsonData.currentConditions.temp;
    const conditions = jsonData.currentConditions.conditions;
    console.log(temp);
    console.log(conditions);
}

async function displayWeatherData(city) {
    data = await getWeatherData(city);
    const tempInFahrenheit = data.currentConditions.temp;
    const tempInCelcius = +((tempInFahrenheit - 32) / 1.8).toFixed(2);
    // console.log(data.currentConditions.temp);
    // console.log(data.currentConditions.conditions);
    const display = document.getElementById("div_display");
    display.innerHTML = "";

    if (tempInFahrenheit < 30) {
        display.style.backgroundColor = "#180DE8";
    }
    else if (tempInFahrenheit < 40) {
        display.style.backgroundColor = "#3A1DC4"
    }
    else if (tempInFahrenheit < 50) {
        display.style.backgroundColor = "#5C2D9F"
    }
    else if (tempInFahrenheit < 60) {
        display.style.backgroundColor = "#9F4E56"
    }
    else if (tempInFahrenheit < 70) {
        display.style.backgroundColor = "#E36E0D"
    }
    else if (tempInFahrenheit < 80) {
        display.style.backgroundColor = "#E55E0D"
    }
    else if (tempInFahrenheit < 90) {
        display.style.backgroundColor = "#EA2C0C"
    }
    else  {
        display.style.backgroundColor = "#ED0B0B"
    }

    const temp_display = document.createElement("p");
    temp_display.innerHTML = `Temperature for ${city} is ${tempInFahrenheit} degrees`;

    const conditions_display = document.createElement("p");
    conditions_display.innerHTML = `Current condition: ${data.currentConditions.conditions}`

    const tempFormat = document.createElement("button");
    tempFormat.id = "changeFormat";
    tempFormat.innerText = "Change to celcius";

    display.appendChild(temp_display);
    display.appendChild(conditions_display);
    display.appendChild(tempFormat);

    tempFormat.addEventListener("click", (event) => {
        if(fahrenheitDisplayed) {
            fahrenheitDisplayed = false;
            tempFormat.innerText = "Change to fahrenheit";
            temp_display.innerHTML = `Temperature for ${city} is ${tempInCelcius} degrees`
        }
        else {
            fahrenheitDisplayed = true;
            tempFormat.innerText = "Change to celcius";
            temp_display.innerHTML = `Temperature for ${city} is ${tempInFahrenheit} degrees`
        }
    });

}

const weatherForm = document.getElementById("getWeatherForm");

weatherForm.addEventListener("submit", (event) => {
    event.preventDefault();
    // const city = document.getElementById("city").value.toLowerCase();
    const city = document.getElementById("city").value;

    // console.log(city);
    displayWeatherData(city);
});
