const API_KEY = '0cc7cc843e565e3ac19b9fcb9aac74f1';
import {imagePhoto} from '../src/img';


export const getWeather = async (latitude, longitude) =>{
    const api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
    try {
        const response = await fetch(api);
        const responseJson = await response.json();
        return responseJson;
    } catch (error) {
        console.log(error)
    }
}
export const getBackground = async (weather) =>{
    return imagePhoto.filter((item)=> weather === item.name );
}