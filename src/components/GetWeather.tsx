import React, {useEffect, useState} from "react";

type Coords = {
    lat: number,
    lon: number
}

const Weather = (props: Coords) => {
    const [temp, setTemp] = useState(0);
    const [humidity, setHumidity] = useState(0);
    const [feelsLike, setFeelsLike] = useState(0);
    const [pressure, setPressure] = useState(0);

    const fetchWeather = () => {
        const key: string = 'fe8a7e0cfa2e309f847fdb17ff2cfba6';
        const URL: string = `https://api.openweathermap.org/data/2.5/weather?lat=${props.lat}&lon=${props.lon}&units=imperial&appid=${key}`;
        console.log(URL);
        
        fetch(URL)
        .then(response => response.json())
        .then((response) => {
            console.log(response);
            setTemp(response.main.temp);
            setHumidity(response.main.humidity);
            setFeelsLike(response.main.feels_like);
            setPressure(response.main.pressure)
        })
    }

    useEffect(() => {
        fetchWeather()
    }, [])

    return(
        <div>
            <h1>Local Weather</h1>
            <p>Temp: {temp}°F</p>
            <p>Feels Like: {feelsLike}°F</p>
            <p>Humidity: {humidity}%</p>
            <p>Air Pressure: {pressure}</p>
            
        </div>
    )
}

export default Weather