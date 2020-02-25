// UI variables
let body = document.querySelector("body");
let search = document.querySelector(".search-txt");
let temp = document.querySelector("#temp-percent");
let aboutCloud = document.querySelector("#cloudy-percent");
let aboutRain = document.querySelector("#raining-ercent");
let rain = document.querySelector(".rainy");
let cloud = document.querySelector(".cloudy");
let locate = document.querySelector(".location");
let degree = document.querySelector(".degree");
let condition = document.querySelector(".condition");



// images for the background base on the weather type

    let sunny = [
        "https://images.pexels.com/photos/1869961/pexels-photo-1869961.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        "https://images.pexels.com/photos/2772854/pexels-photo-2772854.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        "https://images.pexels.com/photos/1311311/pexels-photo-1311311.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
         ];
    let cloudy = [
        "https://images.pexels.com/photos/1122868/pexels-photo-1122868.jpeg?auto=compress&cs=tinysrgb&h=650&w=940/",
        "https://images.pexels.com/photos/3493772/pexels-photo-3493772.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        "https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
       ];
    let rainy  =[
        "https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        "https://images.pexels.com/photos/1887792/pexels-photo-1887792.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
         "https://images.pexels.com/photos/2447531/pexels-photo-2447531.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    ];



// get random Images  
function getRandomize(chosen) {
    // console.log(weatherPics.chosen);
    let selected = chosen[Math.floor(Math.random() * 3)];
    let wrapper =  document.querySelector('.wrapper');
    wrapper.style.backgroundImage = 'url(' + selected + ')';
    console.log(selected);
}
// getRandomize(rainy);



// calculate c to f
// function calculateTofahrenheit(temperature){
//     return (temperature * 9/5) + 32;
//  }



// const openWeather = new Openweathermap;
// listen for the key enterred in search 
// search.addEventListener('keyup', (e) => {
//     const userSearch = e.target.value;
//     if(userSearch !== ''){
    getLocation()
        .then(data => {
            console.log(data);
            let locationText = document.createTextNode(data.profile.name);
            locate.appendChild(locationText);
            let weatherDescription = data.profile.weather[0].description;
            let conditionText = document.createTextNode(weatherDescription);
            condition.appendChild(conditionText);
            let degreeText = document.createTextNode(data.profile.wind.deg);
            degree.appendChild(degreeText);
            let tempText = document.createTextNode(data.profile.wind.deg);
            temp.appendChild(tempText);
            // let rainText = document.createTextNode(data.profile.wind.deg);
            // aboutRain.appendChild(rainText);
            let cloudText = document.createTextNode(data.profile.clouds.all);
            aboutCloud.appendChild(cloudText);
            
            // loop through the pics and check the weather-type to know the right pics to use
             getRandomize(cloudy) 
            
        })
    

