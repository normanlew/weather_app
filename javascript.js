// get weather data utilizing then / catch
function getWeatherData(city) {
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=LLQBM5D34LTDXXQ2AR2CKCDVQ`)
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        const temp = response.currentConditions.temp;
        const conditions = response.currentConditions.conditions;
        console.log(temp);
        console.log(conditions);
    })
    .catch(function(err) {
        alert(err);
    });
}
