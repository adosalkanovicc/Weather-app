import React, { useState } from 'react'

/*
const api = {
  key: "487083d1af077993c1e617c08a37d55e",
  base: "https://api.openweathermap.org/data/2.5/",
}
*/


const App = () => {

  const [search, setSearch] = useState("")
  const [weather, setWeather] = useState({});

  const searchPressed = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=487083d1af077993c1e617c08a37d55e`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
        setWeather(result)
      });
  };


  return (
    <div className='app'>
      <h1>Weather</h1>
      <input type="text" placeholder="Enter location..." onChange={(e) => setSearch(e.target.value)} />
      <button className='btn' onClick={searchPressed}>Search</button>




      {typeof weather.main !== "undefined" ? (
        <div className='background'>


          <p className='city'>{weather.name}</p>


          <p className='temperature'>{(weather.main.temp - 273.15).toFixed(0)}° C</p>
          <div className='flex'>
            <p className='condition'>{weather.weather[0].main}</p>
            <p className='condition'>({weather.weather[0].description})</p>
          </div>
        </div>
      ) : (
        <p className="title">Enter a location to find the weather...</p>
      )}

    </div>
  )
}

export default App

