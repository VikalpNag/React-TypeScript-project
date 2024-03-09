import React, { useState } from "react";
import './top.css'

const Top = () => {
    const [city, setCity] = useState('');
    const [cityName,setCityName]=useState('');

    const SubmitToAdmin = async () => {
        let q = city;
        let BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&appid=${process.env.REACT_APP_API_KEY}`

        try {
            const response = await fetch(BASE_URL);
            const data = await response.json();
            setCityName(data.name);
        } catch (err) {
            console.log(err);

        }
    }


    return <div className="top-container">
        <div className="city">
            <div className="name">{cityName ? cityName: "Raipur"}</div>
            <div className="date-time">Thursday,06 March 2024 | 10:15 PM</div>
        </div>

        <div className="input-search">
            <input type="text" className="input" placeholder="Enter City Name" value={city} onChange={(e) => setCity(e.target.value)} />
            <div className="btn" onClick={SubmitToAdmin}>
                Search
            </div>
        </div>

    </div>
}

export default Top;