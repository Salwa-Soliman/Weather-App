import React,{ useEffect, useState } from "react";
import Location from "../Location/Location.jsx";
import {useNavigate} from'react-router-dom';
import'./holebody.css'
//  import axios from "axios"
import Weatherbox from "../Weather box/Weatherbox.jsx";
const api = {
    key:"ba791830ef6460c3dd7f5ad4891288b9",
      base:"https://api.openweathermap.org/data/2.5/"
  }
export default function Holebody(){
  
  let [longitude,setLon]=useState(0);
  let [latitude,setLat]=useState(0);
    const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  let nav=useNavigate();
  let gotoHome=()=>{
    nav("/historic");
  }
//   useEffect(()=>{
// fetchWeathetOfMyLocation();
//   },[])
  const search = evt => {
    if (evt.key === "Enter") {

          fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          // setQuery('');
           console.log(result);
        });
    }
  }

    return(
        <>
        
  
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 20) ? 'app warm' : 'app') : 'app'}>
    
    <h1 className='title'> Weather Forecast</h1>
  
    
      <main>

        <div className="search-box">
         
          <input 
            type="text"
            className="search-bar"
            placeholder="type the city , country name..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
   
        </div>
        
        {(typeof weather.main != "undefined") ? (
        <div>
         
         <Location 
          weatherName={weather.name} weatherCountry={weather.sys.country}
          ></Location> 
         
          <Weatherbox 
          weatherTemp={weather.main.temp}
          weatherMain={weather.main}
          weatherDescription={weather.weather[0].description}
          tempMin={weather.main.temp_min}
          tempMax={weather.main.temp_max}
          weatherPressure={weather.main.pressure}
          windDegree={weather.wind.deg}
          windSpeed={weather.wind.speed}
          weatherOfMain={weather.weather[0].main}
          
          ></Weatherbox> 
         
           
        </div>
    
        ) : <p className='errorData'>Not Data Yet</p>} 
        <br/><br/><br/>
        
    <button className="btn-danger" id="btn" onClick={gotoHome}> Show Weather By Location </button>

        
       </main>
      
    </div>
  

</>
    )


        
    
}