
// class Openweathermap {
//     constructor() {
//         this.key = "81faaf636287b77fbd9f908bf17f2197";
//     }

    async function getLocation(city) {
        const profileResponse = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=81faaf636287b77fbd9f908bf17f2197');
        const profile = await profileResponse.json();
        return{
            profile
        } 
    }
