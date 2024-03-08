import React from "react";
import '../components/mid.css'
import ClearD from '../components/Assets/01d.png';
import ClearN from '../components/Assets/01n.png';
import FewCloudD from '../components/Assets/02d.png';
import FewCloudN from '../components/Assets/02n.png';
import ScatterBroken from '../components/Assets/03d-n.png';
import ShowerRain from '../components/Assets/9d-n.png';
import RainD from '../components/Assets/10d.png'
import RainN from '../components/Assets/10n.png';
import ThunderstormD from '../components/Assets/11d.png';
import ThunderstormN from '../components/Assets/11n.png';
import Snow from '../components/Assets/13d-n.png';
import MistD from '../components/Assets/50d.png';
import MistN from '../components/Assets/50n.png';
import Humidity from '../components/Assets/humidity.png';
import Celcius from '../components/Assets/celcius.png';
import Wind from '../components/Assets/wind.png';
import TempScale from '../components/Assets/tempScale.png';

const Mid = () => {
    return <div className="container">
        <div className="temp">
            <p>15</p>
            <img src={Celcius} alt="" />
        </div>
        <div className="tempImg">
            <img src={ThunderstormD} alt="" />

            <div className="temp-details">
                <div className="element">
                    <div className="icon"><img src={TempScale} alt="" /></div>
                    <div className="icon-detail">Feels like : 31 deg</div>
                </div>
                <div className="element">
                    <div className="icon"><img src={Humidity} alt="" /></div>
                    <div className="icon-detail">Humidity : 15%</div>
                </div>
                <div className="element">
                    <div className="icon"><img src={Wind} alt="" /></div>
                    <div className="icon-detail">Wind : 14km/h</div>
                </div>
            </div>
            
        </div>
    </div>
}

export default Mid;