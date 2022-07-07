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
                 weatherInput(data);
                 dateDropdown(data); 
            })
            .catch(error => console.log(error))

        }else{
            alert("Select a Location!")
        };
    };    

    const dateDropdown = (data) => {
        setDate(data.days[0].datetime)
        document.getElementById("dropdown-date-button").style.display = "block";
        document.getElementById('dropdown-date-0').innerHTML = data.days[0].datetime;
        document.getElementById('dropdown-date-1').innerHTML = data.days[1].datetime;
        document.getElementById('dropdown-date-2').innerHTML = data.days[2].datetime;
        document.getElementById('dropdown-date-3').innerHTML = data.days[3].datetime;
        document.getElementById('dropdown-date-4').innerHTML = data.days[4].datetime;
        document.getElementById('dropdown-date-5').innerHTML = data.days[5].datetime;
        document.getElementById('dropdown-date-6').innerHTML = data.days[6].datetime;
    
    
        };

        return(
                <div id="buttons-container">
                    <DropdownButton id="dropdown-location-button" title={location}>
                        <Dropdown.Item onClick={() => {setLocation('Melbourne')}}>Melbourne</Dropdown.Item>
                        <Dropdown.Item onClick={() => {setLocation('Sydney')}} >Sydney</Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton id="dropdown-date-button" title={date}>
                        <Dropdown.Item id="dropdown-date-0" onClick={() => {setDate(document.getElementById('dropdown-date-0').innerHTML); weatherInput(0)}}>0</Dropdown.Item>
                        <Dropdown.Item id="dropdown-date-1" onClick={() => {setDate(document.getElementById('dropdown-date-1').innerHTML); weatherInput(1)}}>1</Dropdown.Item>
                        <Dropdown.Item id="dropdown-date-2" onClick={() => {setDate(document.getElementById('dropdown-date-2').innerHTML); weatherInput(2)}}>2</Dropdown.Item>
                        <Dropdown.Item id="dropdown-date-3" onClick={() => {setDate(document.getElementById('dropdown-date-3').innerHTML); weatherInput(3)}}>3</Dropdown.Item>
                        <Dropdown.Item id="dropdown-date-4" onClick={() => {setDate(document.getElementById('dropdown-date-4').innerHTML); weatherInput(4)}}>4</Dropdown.Item>
                        <Dropdown.Item id="dropdown-date-5" onClick={() => {setDate(document.getElementById('dropdown-date-5').innerHTML); weatherInput(5)}}>5</Dropdown.Item>
                        <Dropdown.Item id="dropdown-date-6" onClick={() => {setDate(document.getElementById('dropdown-date-6').innerHTML); weatherInput(6)}}>6</Dropdown.Item>
                    </DropdownButton>
                    <Button id="submitButton" onClick={() => {WeatherGetAPI()}}>Submit</Button>{' '}
                </div>
        );
};
