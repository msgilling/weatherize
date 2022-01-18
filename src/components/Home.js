import React, { useEffect } from 'react'
import axios from 'axios'

const Home = () => {
  // const [formData, getFormData] = useState('')
  // const [formSubmit, getSubmit] = useState('')

  useEffect(() => {
    const getWeather = async () => {
      const response = await axios.get("http://api.weatherapi.com/v1/forecast.json?key=62945e3bf23742b1955150259221701&q=northampton&days=1&aqi=no&alerts=no")
      console.log('response ->', response)
    }
    getWeather()
  }, [])

  return(

    <div className="main-section">
      


    </div>
  )
}

export default Home