import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {
  const [formData, setFormData] = useState('')
  const [formSubmit, setFormSubmit] = useState('')
  const [weather, setWeather] = useState('')
  const [hasError, setHasError] = useState(false)


  useEffect(() => {
    const getWeather = async () => {
      try {
        const { data } = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=62945e3bf23742b1955150259221701&q=${formSubmit}&days=1&aqi=no&alerts=no`)
        // console.log('response ->', data.location)
        // console.log('response ->', data.current.condition.text)
        setWeather(data)
      } catch (err) {
        setHasError(true)
        console.log(err.message)
      }
    }
    getWeather()
  }, [formSubmit])

  console.log('city selected ->', weather)
  console.log('error', hasError)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('submit working')
    setFormSubmit(formData)
  }

  const handleChange = (event) => {
    console.log(event.target.value)
    setFormData(event.target.value)
  }

  return (

    <div className="main-section">
      <div className="title">
        <h1>Welcome to <span>Weatherize</span></h1>

      </div>
      <div>
        <form
          className="weather-form"
          onSubmit={handleSubmit}
        >
          <input
            className="location-input"
            placeholder="type your city here"
            name="location"
            onChange={handleChange}

          />
          <button
            className="submit-button"
          >
            Submit
          </button>
        </form>
        <div className="weather-container">
          {weather ?
          <>
           <div className="city">
            <h2>{weather.location.name}</h2>
          </div>
          <div className="weather-description">
            <h3>{weather.current.condition.text}</h3>
          </div>
          <div className="icon">
            <img src={weather.current.condition.icon} alt="weather-icon"/>
          </div>
          <div className="temp">
            <h3>{weather.current.temp_c}°</h3>
          </div>
        </>
        :
        <h3 className="title has-text-centered">
            {hasError ? 'Oops, something has gone wrong!' : 'Fetching the weather for you...'}
          </h3>
        }

        </div>

      </div>
    </div>





  )
}

export default Home