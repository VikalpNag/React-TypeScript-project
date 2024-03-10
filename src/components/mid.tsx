import React from "react";
import '../components/mid.css'
import Humidity from '../components/Assets/humidity.png';
import Wind from '../components/Assets/wind.png';
import TempScale from '../components/Assets/tempScale.png';

const Mid = (props:any) => {


    return <div className="mid-container">
        <div className="temp">
            <p>{props.temp ? props.temp : "15"}</p>
            <div className="unit">
                <p>°C</p>
                <div className="new">{props.weather}</div>
            </div>
        </div>

        <div className="tempImg">
            <img src={props.image} alt="" />

            <div className="temp-details">
                <div className="element">
                    <div className="icon"><img src={TempScale} alt="" /></div>
                    <div className="icon-detail">Feels like :{props.feel?props.feel:"20"}°C</div>
                </div>
                <div className="element">
                    <div className="icon"><img src={Humidity} alt="" /></div>
                    <div className="icon-detail">Humidity : {props.humidity?props.humidity : "14"}%</div>
                </div>
                <div className="element">
                    <div className="icon"><img src={Wind} alt="" /></div>
                    <div className="icon-detail">Wind :{props.wind? props.wind:"3"}km/h</div>
                </div>
            </div>
            
        </div>
    </div>
}

export default Mid;