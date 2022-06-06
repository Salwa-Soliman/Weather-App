import React,{useState} from "react";
import "./location.css"
export default function Location(props){
    
  const dateBuilder = (d) => {
    
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    
    return `${ day}   ${ date}   ${ month}   ${ year}` 
  }
    
  const timeBuider = () =>{
    let time= new Date().toLocaleTimeString();
  
    return `${time}`
  }

    let{weatherName,
        weatherCountry,
    
    }=props
    return(
        <>
        
          <div className="location-box">
            <div className="location">{weatherName}, {weatherCountry}</div>
            <div className="date">{dateBuilder(new Date())}</div>
            <div className="date">{timeBuider()}</div>
          </div>
        </>
    )
}