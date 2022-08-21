import {useEffect, useState} from 'react'

import axios from 'axios'

const API_KEY = process.env.REACT_APP_API_KEY

const Weather= ({capital}) => {
    const [weatherData, setWeatherData] = useState([])
    const [isLoading, setLoading] = useState(true)
    
    useEffect(() => {
        axios
        .get(`http://api.openweathermap.org/geo/1.0/direct?q=${capital}&limit=1&appid=${API_KEY}`)
        .then(response => {
            const lat = response.data[0].lat
            const lon = response.data[0].lon

            axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
            .then(response => {
                const weatherInfo = response.data
                setWeatherData(weatherInfo)
                setLoading(false)
                })
            })
        }, [])

    if (isLoading) {
        return <div>loading</div>
    }

    else {
        const temperature = (weatherData.main.temp - 273.15).toFixed(2)
        const windSpeed = weatherData.wind.speed
        const image = weatherData.weather[0].icon

        return (
            <div>
                <h2>Weather in {capital}</h2>
                <p>temperature {temperature} Celsius</p>
                <img src={`http://openweathermap.org/img/wn/${image}@2x.png`}></img>
                <p>wind {windSpeed} m/s</p>
            </div>
        )
    }
}

export default Weather