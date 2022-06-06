import React,{useEffect,useState,useRef} from "react"
 import './historic.css'
import * as d3 from 'd3'
import { linkVertical } from "d3";
import Chartt from "../../Chart";
export default function Historic(){
  let [longitude,setLon]=useState();
  //-74.1636606458028
  let [latitude,setLat]=useState();
  //40.74502670281777
 
  const [weather, setWeather] = useState({});
 const [data,setData]=useState([]);
const [clouds,setClouds]=useState([]);
const [humidity,setHumidity]=useState([]);


  const myLocation  = (position) => {
   setLat(position.coords.latitude);
   setLon(position.coords.longitude);

  }
  const fetchWeathetOfMyLocation= async ()=>{
      try{
         await window.navigator.geolocation.getCurrentPosition(myLocation);
         
     search()
     console.log(longitude,latitude)
    }
      catch(err){
        console.log(err);
      }
      
  }
  

  const search =async() => {
    // if (evt.key === "Enter") {
         await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=minutely,alerts&appid=ba791830ef6460c3dd7f5ad4891288b9`   )
          
        .then(res => res.json())
        .then(result => {
          setWeather(result);
         // setLat(0);
         // setLat(0);
           console.log(result);
           setData([result.daily[0].temp.day,
            result.daily[1].temp.day,
            result.daily[2].temp.day,
            result.daily[3].temp.day,
            result.daily[4].temp.day,
          ]);
            setClouds([result.daily[0].weather[0].description,
              result.daily[1].weather[0].description,
              result.daily[2].weather[0].description,
              result.daily[3].weather[0].description,
              result.daily[4].weather[0].description
            ]);
            setHumidity([result.daily[0].humidity,
              result.daily[1].humidity,
              result.daily[2].humidity,
              result.daily[3].humidity,
              result.daily[4].humidity
            ])
            // draw();
    
          
        });
    // }
  }
  
  //  api.openweathermap.org/data/2.5/forecast/daily?q={city name}&cnt={cnt}&appid={API key}
 
 const [days]=useState(['currentDay','secondDay','thirdDay','fourthDay','fifthDay']);
// const [data]=useState(dataa);


    return(
        <>
       

        <h1 className='titlee'> Weather Forecast</h1>
<button  onClick={fetchWeathetOfMyLocation}> 
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjdAfbYVLb8ciL_vhpDC_bSrF4YPnnmOk5KQsrkqyxOsb4XLnGBcU97B2qFRsYAcKYYL0&usqp=CAU" style={{width:"80px",marginLeft:"15%"}}/>
<p className="myLocationTitle" style={{fontWeight:"700",fontSize:"18px"}}>Get My Location</p>
</button>
        <div className="wrapper">
          {/* <p>{weather.daily[1].temp.day}</p> */}
        <input 
            type="text"
            className="latitude"
            placeholder="type latitude of location ..."
            onChange={e => setLat(e.target.value)}
            value={latitude}
            // onKeyPress={search}
          /> 
          <button onClick={search} className="btn-info searchWeather">show Historic weather</button>

            <input 
            type="text"
            className="longitude"
            placeholder="type longitude of location..."
            onChange={e => setLon(e.target.value)}
            value={longitude}
            // onKeyPress={search}
          />
          </div>

          <br/><br/><br/>
          <p className="countryName">{weather.timezone}</p>
          <table className="table table-success table-striped" style={{width:'90%',marginLeft:'5%',marginTop:"2%"}}>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First Day</th>
      <th scope="col">Second Day</th>
      <th scope="col">Third Day</th>
      <th scope="col">Fourth Day</th>
      <th scope="col">Fifth Day</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Temp</th>
         <td>{data[0]}&#176; </td>
       <td>{data[1]}&#176;</td>
      <td>{data[2]}&#176;</td>
      <td>{data[3]}&#176;</td>
      <td>{data[4]}&#176;</td>   
      
    </tr>
    <tr>
      <th scope="row">Cloud</th>
        <td>{clouds[0]} </td>
     <td>{clouds[1]} </td>
      <td>{clouds[2]} </td>
      <td>{clouds[3]} </td>
      <td>{clouds[4]} </td>   

    </tr>
    <tr>
      <th scope="row">Humidity</th>
        <td>{humidity[0]}% </td>
     <td>{humidity[1]}% </td>
      <td>{humidity[2]}% </td>
      <td>{humidity[3]}% </td>
      <td>{humidity[4]}% </td>   

    </tr>
  </tbody>
</table> 
<br/><br/><br/>
<img src="https://thumbs.dreamstime.com/b/thermometer-air-temperature-icon-weather-forecast-application-widget-color-version-light-gray-background-thermometer-174408917.jpg" width={200} style={{marginLeft:"45%"}}/>
   
    
<br/><br/><br/>
<Chartt arrData={data}></Chartt>
      
       
        <br/><br/><br/>
          
        </>
    )
}