const API_KEY = "7e041fbf4d0d50ea950105c5f9648feb";
const ROOT_URL = "https://api.openweathermap.org/data/2.5/weather?";
const FETCH_WEATHER = "FETCH_WEATHER";
import Axios from "axios";

export function FetchWeather(city) {
  let URL = `${ROOT_URL}q=${city},uk&APPID=${API_KEY}`;
  const request = Axios.get(URL);
  request.then(ele => console.log(ele))
  // console.log("request", request);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
