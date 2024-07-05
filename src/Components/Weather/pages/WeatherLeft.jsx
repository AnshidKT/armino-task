import React, { useContext } from "react";
import { CiSearch } from "react-icons/ci";
import { ApiContext } from "../../UseContext/ContextApi";
import "../index.css";
const WeatherLeft = () => {
  const { weatherData, search, inputRef } = useContext(ApiContext);

  return (
    <div
     id="leftbox"
      className=" mt-10 w-80 h-80 md:w-96 md:h-96 rounded-3xl md:mr-10 mb-5 sm:mb-0 sm:mr-5 flex flex-col items-center justify-around  p-4"
    >
      <div className="flex items-center justify-center">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search"
          className="search-input"
        />
        <div
          style={{
            width: 35,
            height: 35,
            borderRadius: 40,
            justifyContent: "center",
            alignItems: "center",
            // backgroundColor: "red",
            display: "flex",
            borderWidth: 0.4,
            borderColor: "white",
          }}
          onClick={() => search(inputRef.current.value)}
        >
          <CiSearch style={{ width: 15, height: 15 ,color:'white'}} />
        </div>
      </div>

      {weatherData ? (
        <>
          {weatherData ? (
            <div className="flex items-center justify-center">
              <img
                style={{
                  width: 60,
                  height: 60,
                  marginRight: 5,
                  color: "white",
                }}
                src={weatherData.icon}
                alt=""
              />
              <span
                style={{
                  fontSize: 50,
                  fontWeight: "bold",
                  marginLeft: 5,
                  marginRight: 7,
                  color: "white",
                }}
              >
                {weatherData.temperature}
              </span>
            </div>
          ) : (
            <p>Loading...</p>
          )}

          {weatherData ? (
            <React.Fragment>
              <span
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  marginRight: 7,
                  color: "white",
                }}
              >
                {weatherData.location}
              </span>
              <span
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  marginRight: 7,
                  color: "white",
                }}
              >
                {weatherData.windSpeed}
              </span>
              <span
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  marginRight: 7,
                  color: "white",
                }}
              >
                Date: 21 Oct 2023
              </span>
              <span
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  marginRight: 7,
                  color: "white",
                }}
              >
                Feels like {weatherData.humidity}
              </span>
            </React.Fragment>
          ) : null}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default WeatherLeft;
