import React, { useState } from 'react'
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";
import "./infoBox.css";
export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Jamshedpur",
        feelsLike: 13.02,
        temp: 13.05,
        tempMin: 13.05,
        tempMax: 13.05,
        humidity: 100,
        weather: "overcast clouds",
    });
    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };
    return(
        <div className="weatherHeader" style={{textAlign: "center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
            </div>
    )
}