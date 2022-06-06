
import React, { useState } from 'react';
import './App.css';

import {Navigate, Route,Routes}from 'react-router-dom'

// import Weatherbox from './Weather box/Weatherbox';
// import Location from './Location/Location';
import Historic from './Components/Historic weather/Historic';
// import Holebody from './weatherapp/src/Components/Hole Body/Holebode.jsx';
import Holebody from './Components/Hole Body/Holebode';
import Chartt from './Chart';
// const api = {
//   key:"ba791830ef6460c3dd7f5ad4891288b9",
//     base:"https://api.openweathermap.org/data/2.5/"
// }

function App() {
  
  return(
    <>
      <Routes>
      {/* <Chart></Chart> */}
      <Route path='/' element={<Navigate to="/home"/>}/>
        <Route path='/home' element={<Holebody/>}/>
        <Route path='/historic' element={<Historic/>}/>

    
    
    </Routes> 
   
    </>
  )
}

export default App;
