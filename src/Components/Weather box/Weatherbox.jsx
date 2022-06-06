import React from "react";
import "./weatherbox.css"

export default function Weatherbox(props){
  
    let{weatherTemp,
        weatherMain,
        weatherDescription,
        tempMin,
        tempMax,
        weatherPressure,
        windDegree,
        windSpeed,
        weatherOfMain
    }=props;
    return(
        <>
        
        <div className="weather-box">
            <div className="temp">
              {Math.round(weatherTemp)}°c
            <p className="weather">{weatherOfMain}</p>
            <p className="weather_details">{weatherDescription}</p>

            
       
             {(typeof weatherMain != "undefined") ? ((weatherTemp > 20) ?
              <img className="iconimg" src="https://paltimeps.ps/uploads/archive/102012/1351403811.jpg" width={115} /> 
              :<img className="iconimg" src="https://icon-library.com/images/rainy-cloud-icon/rainy-cloud-icon-16.jpg" width={115} />  ):""} 
          
            
            <div className="containerofdetails">
              <div className="left_col">
              <p className="weather_details">temp_min :{tempMin} °c</p>
            <p className="weather_details">pressure: {weatherPressure} atm</p>

            </div>
            <div className="right_col">
            <p className="weather_details">temp_max :{tempMax} °c</p>

            <p className="weather_details">wind degree :{windDegree} &#176;</p>
           
            </div>
            </div>
            <p className="weather_details">wind speed :{windSpeed} m/h </p>

            
            </div>
            
          </div>
        
        
        </>
    )
}