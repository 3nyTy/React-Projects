import React from 'react';
import axios, { get } from 'axios';

const API_KEY = '9178f8e50ad331396d324c4131ca0030';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
/****
 * ES6 doesn't allow export default const. You must declare the constant first then export it:

const Header = () => {
  return <pre>Header</pre>
};
export default Header;
This constraint exists to avoid writting export default a, b, c; that is forbidden: only one variable can be exported as default
 * 
 */

  export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
 const request = axios.get(url);

 
  return {
    type : FETCH_WEATHER,
    payload: request //React Promise is a MW. Here when it gets a promise, it stops the action and send the resolved data.MW stops the promise and it stops the action in its tracks until promis is resolved. If MW is not there, we have to write a switch case in reducer_weather and wait until promise resolved which is a pain. 
  };

 
}
