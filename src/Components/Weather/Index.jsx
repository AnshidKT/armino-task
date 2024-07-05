import React from "react";
import weatherBgImg from "../../img/weatherbfimg.jpg";
import WeatherLeft from "./pages/WeatherLeft";
import WeatherRight from "./pages/WetherRight";

const Weather = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen flex flex-col sm:flex-row items-center justify-center"
      style={{ backgroundImage: `url(${weatherBgImg})` }}
    >
      <WeatherLeft />
      <WeatherRight />
    </div>
  );
};

export default Weather;
