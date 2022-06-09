import React, { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function UseWeatherAPI({weatherInput}) {
    const [location, setLocation] = useState('Location');
    
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
                
            })
            .catch(error => console.log(error))
        }else{
            
        };
    };    
    
        return(
                <div id="buttons-container" >
                    <DropdownButton id="dropdown-basic-button" title={location}>
                        <Dropdown.Item onClick={() => {setLocation('Melbourne')}}>Melbourne</Dropdown.Item>
                        <Dropdown.Item onClick={() => {setLocation('Sydney')}} >Sydney</Dropdown.Item>
                    </DropdownButton>
                    <Button variant="primary" id="submitButton" onClick={() => {WeatherGetAPI()}}>Submit</Button>{' '}
                </div>
        );
    
};
