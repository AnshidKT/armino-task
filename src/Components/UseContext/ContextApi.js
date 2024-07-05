import React, { createContext, useEffect, useRef, useState } from 'react';

import clear_icon from '../../img/clear.png';
import cloud_icon from '../../img/cloud.png';
import drizzle_icon from '../../img/drizzle.png';
import rain_icon from '../../img/rain.png';
import snow_icon from '../../img/snow.png';

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {




const inputRef=useRef()

  const [weatherData, setWeatherData] = useState(null);

  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  };

  const search = async (city) => {

if(city===""){
    alert('Enter the city name')
    return
}

    try {
      const apiKey = '615f1fbcad4826e2a017e27be72ea304';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

      const response = await fetch(url);
      const data = await response.json();


if(!response.ok){
    alert(data.message)
    return
}


      console.log(data);

      const icon = allIcons[data.weather[0].icon] || clear_icon;

      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      });
    } catch (err) {
      console.error('Error fetching weather data:', err);
    }
  };

  useEffect(() => {
    search("Kerala");
  });

  return (
    <ApiContext.Provider value={{ weatherData, search,inputRef }}>
      {children}
    </ApiContext.Provider>
  );
};
