import { useState } from 'react';
import './App.css';
import axios from 'axios';
function App () {

  const [location, setLocation] = useState('')
  const [data, setData] = useState({})


  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=e6a7ef482fdd9ce26aa13c3fdd67bde1`


  const searchLocation = () => {
    axios.get(url)
      .then(response => {
        console.log(response.data);
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });

    setLocation('')
    console.log();
  }
 return (
    <div className="app">
      <div className="search flex justify-center pt-20">
        <div className="flex justify-between w-80 p-3  border border-gray-700 rounded-3xl">
          
          <input
            className="text-black bg-transparent outline-none placeholder-black"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            type='text'
            placeholder="enter location"
          />
          <button onClick={searchLocation} className="text-black">
            Search
          </button>
        </div>
      </div>
      <div className="container">
        <div className="top flex flex-col">
          <div className="location">
            {data.name ? <p className="text-4xl">{data.name}</p> : "Secelet Location"}
          </div>
          <div className="temp text-6xl font-bold">
            {data.name ? <h1>{data.main.temp}°F</h1> : ""}

          </div>
          <div className="description text-2xl  mr-12">
            {data.weather ?
              <div className="flex flex-col items-end">
                <span className="">{data.weather[0].main === "Clouds" ?  '':
                  <span className="text-yellow-300"></span>}
                </span>
                <p>{data.weather[0].main}</p>
              </div>
              :
              ""}
          </div>
        </div>
        {/* bottom */}
        <div className="bottom flex justify-between  px-14 py-10 rounded-xl text-center">
          <div className="feels">
            {data.main ? <p>{data.main.feels_like}°F</p> : null}
            <span>Feels Like</span>
          </div>
          <div className="humidity">
            {data.main ?
              <p className="flex justify-center">
                <span>
                  {data.main.humidity}
                </span>
                <span>
                
                </span>
              </p> : null}
            <span>Humidity</span>
          </div>
          <div className="wind">
            {data.wind ?
              <p className="flex justify-center items-center gap-2">
                <span>
                  {data.wind.speed}  10km/h
                </span>
                <span>
                
                </span>
              </p> : null}
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
    </div>
  );
} export default App;