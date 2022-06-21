import React, { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function UseWeatherAPI({weatherInput}) {
    const [location, setLocation] = useState('Location');
    const [date, setDate] = useState('Date')
    
    const WeatherGetAPI = () => {
        if (location !== "Location"){
            fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&elements=datetime%2Ctempmax%2Ctempmin%2Ctemp&include=days&key=S7J8YKHYZTCWAAE9T4BTR9D4K&contentType=json`, {
                "method": "GET",
                "headers": {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                return response.json();
            })
            .then(data => {
                weatherInput(data)
                dateDropdown(data)
            })
            .catch(error => console.log(error))

        }else{
            
        };
    };    

    const dateDropdown = (data) => {
        let days = data.days
        document.getElementById("dropdown-date-button").style.display = "block";
        document.getElementById('dropdown-date-0').innerHTML = days[0].datetime;
        document.getElementById('dropdown-date-1').innerHTML = days[1].datetime;
        document.getElementById('dropdown-date-2').innerHTML = days[2].datetime;
        document.getElementById('dropdown-date-3').innerHTML = days[3].datetime;
        document.getElementById('dropdown-date-4').innerHTML = days[4].datetime;
        document.getElementById('dropdown-date-5').innerHTML = days[5].datetime;
        document.getElementById('dropdown-date-6').innerHTML = days[6].datetime;
        console.log(document.getElementById('dropdown-date-0').innerHTML)
        };
    
        return(
                <div id="buttons-container">
                    <DropdownButton id="dropdown-location-button" title={location}>
                        <Dropdown.Item onClick={() => {setLocation('Melbourne')}}>Melbourne</Dropdown.Item>
                        <Dropdown.Item onClick={() => {setLocation('Sydney')}} >Sydney</Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton id="dropdown-date-button" title={date}>
                        <Dropdown.Item id="dropdown-date-0" onClick={() => {setDate(document.getElementById('dropdown-date-0').innerHTML); weatherInput(0)}}></Dropdown.Item>
                        <Dropdown.Item id="dropdown-date-1" onClick={() => {setDate(document.getElementById('dropdown-date-1').innerHTML); weatherInput(1)}}></Dropdown.Item>
                        <Dropdown.Item id="dropdown-date-2" onClick={() => {setDate(document.getElementById('dropdown-date-2').innerHTML); weatherInput(2)}}></Dropdown.Item>
                        <Dropdown.Item id="dropdown-date-3" onClick={() => {setDate(document.getElementById('dropdown-date-3').innerHTML); weatherInput(3)}}></Dropdown.Item>
                        <Dropdown.Item id="dropdown-date-4" onClick={() => {setDate(document.getElementById('dropdown-date-4').innerHTML); weatherInput(4)}}></Dropdown.Item>
                        <Dropdown.Item id="dropdown-date-5" onClick={() => {setDate(document.getElementById('dropdown-date-5').innerHTML); weatherInput(5)}}></Dropdown.Item>
                        <Dropdown.Item id="dropdown-date-6" onClick={() => {setDate(document.getElementById('dropdown-date-6').innerHTML); weatherInput(6)}}></Dropdown.Item>
                    </DropdownButton>
                    <Button id="submitButton" onClick={() => {WeatherGetAPI()}}>Submit</Button>{' '}
                </div>
        );
};
