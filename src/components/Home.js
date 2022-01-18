import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {
  const [formData, setFormData] = useState('')
  const [formSubmit, setFormSubmit] = useState('')
  const [weather, setWeather] = useState('')


  useEffect(() => {
    const getWeather = async () => {
      const { data } = await axios.get("http://api.weatherapi.com/v1/forecast.json?key=62945e3bf23742b1955150259221701&q={formSubmit}&days=1&aqi=no&alerts=no")
      console.log('response ->', data)
      setWeather(data)
    }
    getWeather()
  }, [formSubmit])

  console.log('city selected ->', weather)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('submit working')
    setFormSubmit(formData)
  }

  const handleChange = (event) => {
    console.log(event.target.value)
    setFormData(event.target.value)
  }

  return(

    <div className="main-section">
      <div className="title">
        <h1>Welcome to <span>Weatherize</span></h1>

      </div>
      <div>
        <form className="weather-form">
          <input
            className="location-input"
            placeholder="type your city here"
            name="location"
            onChange={handleChange}
          />
          <button
            className="submit-button"
            onSubmit={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Home