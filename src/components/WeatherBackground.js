// import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import clearDay from '../assets/CLEAR.PNG'
import cloudyDay from '../assets/CLOUDY.PNG'
import hazyDay from '../assets/CLOUDY.PNG'
import partCloudyDay from '../assets/PARTCLOUDY.PNG'
import rainingDay from '../assets/RAINY.PNG'


const WeatherBackground = () => {
  const [weather, setWeather] = useState('')

  useEffect(() => {
    const getWeather = async () => {
      try {
        const response = await axios.get('http://api.weatherapi.com/v1/forecast.json?key=62945e3bf23742b1955150259221701&q=London&days=1&aqi=yes&alerts=no')
        console.log('response ->', response)
      } catch (err) {
        console.log('err', err)
      }
    }
    getWeather()
  }, [])
  return (
    <div className="currentweather-bg">
      <img src={partCloudyDay} alt="logo" className="weather-bg" />
    </div>
      
    

  )
}

export default WeatherBackground