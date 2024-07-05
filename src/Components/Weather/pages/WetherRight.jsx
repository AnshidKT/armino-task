  import React from "react";
  import "../index.css";
  const WetherRight = () => {
    return (
      <div className="flex flex-col md:items-center md:mt-7 md:justify-center  md:h-96 md:pr-44 w-full sm:w-1/2">
        <div id="rightbox" className=" flex flex-col items-center justify-around md:ml-20 m-3 h-48 md:h-72 rounded-lg mb-5 md:mx-auto w-90 sm:w-full">
          <div className="weather-div">
            <div
              style={{
                width: 50,
                flexDirection: "column",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: 12 }}>Now</span>
              <div
                style={{ width: 100, display: "flex", justifyContent: "center" }}
              >
                <img
                  style={{ width: 25, height: 25 }}
                  src={require("../../../img/clear.png")}
                  alt=""
                />
                31 °C
              </div>
            </div>
            <div
              style={{
                width: 50,
                flexDirection: "column",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: 12 }}>2 AM</span>
              <div
                style={{ width: 100, display: "flex", justifyContent: "center" }}
              >
                <img
                  style={{ width: 25, height: 25 }}
                  src={require("../../../img/cloud.png")}
                  alt=""
                />
                28 °C
              </div>
            </div>
            <div
              style={{
                width: 50,
                flexDirection: "column",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: 12 }}>3 AM</span>
              <div
                style={{ width: 100, display: "flex", justifyContent: "center" }}
              >
                <img
                  style={{ width: 25, height: 25 }}
                  src={require("../../../img/drizzle.png")}
                  alt=""
                />
                25 °C
              </div>
            </div>
            <div
              style={{
                width: 50,
                flexDirection: "column",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: 12 }}>4 AM</span>
              <div
                style={{ width: 100, display: "flex", justifyContent: "center" }}
              >
                <img
                  style={{ width: 25, height: 25 }}
                  src={require("../../../img/humidity.png")}
                  alt=""
                />
                30 °C
              </div>
            </div>
            <div
              style={{
                width: 50,
                flexDirection: "column",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: 12 }}>5 AM</span>
              <div
                style={{ width: 100, display: "flex", justifyContent: "center" }}
              >
                <img
                  style={{ width: 25, height: 25 }}
                  src={require("../../../img/rain.png")}
                  alt=""
                />
                24 °C
              </div>
            </div>
          </div>
          <div className="border"></div>
          <div className="weather-div">
            <div
              style={{
                width: 50,
                flexDirection: "column",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: 12 }}>6 AM</span>
              <div
                style={{ width: 100, display: "flex", justifyContent: "center" }}
              >
                <img
                  style={{ width: 25, height: 25 }}
                  src={require("../../../img/rain.png")}
                  alt=""
                />
                24 °C
              </div>
            </div>
            <div
              style={{
                width: 50,
                flexDirection: "column",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: 12 }}>7 AM</span>
              <div
                style={{ width: 100, display: "flex", justifyContent: "center" }}
              >
                <img
                  style={{ width: 25, height: 25 }}
                  src={require("../../../img/cloud.png")}
                  alt=""
                />
                28 °C
              </div>
            </div>
            <div
              style={{
                width: 50,
                flexDirection: "column",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: 12 }}>8 PM</span>
              <div
                style={{ width: 100, display: "flex", justifyContent: "center" }}
              >
                <img
                  style={{ width: 25, height: 25 }}
                  src={require("../../../img/drizzle.png")}
                  alt=""
                />
                25 °C
              </div>
            </div>

            <div
              style={{
                width: 50,
                flexDirection: "column",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: 12 }}>9 PM</span>
              <div
                style={{ width: 100, display: "flex", justifyContent: "center" }}
              >
                <img
                  style={{ width: 25, height: 25 }}
                  src={require("../../../img/clear.png")}
                  alt=""
                />
                31 °C
              </div>
            </div>
            <div
              style={{
                width: 50,
                flexDirection: "column",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: 12 }}>10 PM</span>
              <div
                style={{ width: 100, display: "flex", justifyContent: "center" }}
              >
                <img
                  style={{ width: 25, height: 25 }}
                  src={require("../../../img/humidity.png")}
                  alt=""
                />
                30 °C
              </div>
            </div>
          </div>
        </div>

        <div className=" flex flex-col m-3 md:ml-20 h-48 md:h-72 rounded-lg md:mx-auto w-90 sm:w-full">
          <span className="mob" style={{fontSize:20,fontWeight:'bold',color:'white'}}>Random Text</span>

          <span className="mob" >
            Improve him believe opinion offered met and cheered Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Reprehenderit porro alias
            accusantium aspernatur veniam labore laboriosam, quae ipsam facilis
            minima rem necessitatibus voluptate? Assumenda quasi totam quia
            dolores, odit dolorem.{" "}
          </span>
        </div>
      </div>
    );
  };

  export default WetherRight;
