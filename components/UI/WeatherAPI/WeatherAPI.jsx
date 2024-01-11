import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function WeatherAPI() {
    const [weather, setWeather] = useState({});

    useEffect(() => {
        axios.get('https://api.open-meteo.com/v1/forecast?latitude=47.6131554&longitude=-122.5068696&current=temperature_2m,is_day,precipitation,rain,showers,snowfall&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=auto&forecast_days=1')
            .then(response => {
                setWeather(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return(
        <>
            {weather.current ? (
                <span>
                    {weather.current.temperature_2m}
                    {weather.current_units.temperature_2m}
                </span>
            ) : (
                <span>Weather forecast is loading...</span>
            )}
        </>
    );
}