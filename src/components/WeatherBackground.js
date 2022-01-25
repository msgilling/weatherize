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
  const myDate = new Date(null)
  const hrs = myDate.getHouse(null)

  useEffect(() => {
    const getWeather = async () => {
      try {
        const { data } = await axios.get('http://api.weatherapi.com/v1/forecast.json?key=62945e3bf23742b1955150259221701&q=London&days=1&aqi=yes&alerts=no')
        // console.log('response ->', response)
        setWeather(data)
      } catch (err) {
        console.log('err', err)
      }
    }
    getWeather()
  }, [])

  // console.log('weather now is', weather.current.condition.text)

  console.log('weather', weather.current)

  // if (hrs < 12) {
  //   document.style.backgroundImage = 
  // }

  return (
    <div className="currentweather-bg"
      style={{
        backgroundImage: `url(${partCloudyDay})`
      }}
    />
      // {/* <img src={partCloudyDay} alt="logo" className="weather-bg" /> */}
    // </div>
      
    

  )
}

export default WeatherBackground