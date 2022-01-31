// import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
// import clearDay from '../assets/CLEAR.PNG'
// import cloudyDay from '../assets/CLOUDY.PNG'
// import hazyDay from '../assets/CLOUDY.PNG'
import partCloudyDay from '../assets/PARTCLOUDY.PNG'
// import rainingDay from '../assets/RAINY.PNG'


const WeatherBackground = () => {
  const [weather, setWeather] = useState('')
  

  useEffect(() => {
    const getWeather = async () => {
      try {
        const { data } = await axios.get('http://api.weatherapi.com/v1/forecast.json?key=62945e3bf23742b1955150259221701&q=London&days=1&aqi=yes&alerts=no')
        setWeather(data)
      } catch (err) {
        console.log('err', err)
      }
    }
    getWeather()
  }, [])

  console.log('weather', weather.current)

  if (!weather) return null
  
  console.log(weather.location.localtime)
  
  if(weather.location.localtime > 7 && weather.location.localtime < 19) {
    return 'day'
  } else if (weather.location.localtime > 19 && weather.location.localtime < 6) {
    return 'night'
  }


  return (
    <div className="currentweather-bg"
      style={{
        backgroundImage: `url(${partCloudyDay})`
      }}
    />

  )
}

export default WeatherBackground