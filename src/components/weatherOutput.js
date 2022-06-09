import React, { useState } from "react";
import UseWeatherAPI from './weatherAPI.js'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.css';
import tempMin from './Images/tempMin.jpg';
import tempMax from './Images/tempMax.jpg';
import tempAvg from './Images/tempAvg.jpg'
import standby from './Images/default.jpg'

export default function DisplayWeather(){
    const [weather, setWeather] = useState([])
    const [days, setDays] = useState([])

    const weatherInput = (data) => {
        setWeather(data)
        setDays(data.days[0])
        console.log(weather)
        console.log(days)
        document.getElementById('carousel').style.display = "block";
        document.getElementById('placeHolder').style.display = "none";
    }
return(
    <main>
        <UseWeatherAPI weatherInput={weatherInput}/>
        <div id="placeHolder">
            <img 
                className="d-block w-100 h-100"
                src={standby}
                />
        </div>
        <Carousel fade id="carousel">
            <Carousel.Item interval={5000} className="carouselPic">
                <img
                    className="d-block w-100 h-100"
                    src={tempAvg}
                />
            <Carousel.Caption>
                <h1>Temperature Average {days.temp}&deg;</h1>
                <p>{weather.resolvedAddress}</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000} className="carouselPic">
                <img
                    className="d-block w-100 h-100"
                    src={tempMax}
                />
            <Carousel.Caption>
                <h1>Temperature Max {days.tempmax}&deg;</h1>
                <p>{weather.resolvedAddress}</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000} className="carouselPic">
                <img
                    className="d-block w-100 h-100"
                    src={tempMin}
                />
            <Carousel.Caption>
                <h1>Temperature Low {days.tempmin}&deg;</h1>
                <p>{weather.resolvedAddress}</p>
            </Carousel.Caption>
            </Carousel.Item>
            
      </Carousel>
    </main>
)



}