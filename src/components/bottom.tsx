import React from "react";
import WeakWeather from "./weakWeather";
import '../components/bottom.css';

const Bottom =()=> {
    return <div className="bottomContainer">
      <WeakWeather/>
      <WeakWeather/>
      <WeakWeather/>
      <WeakWeather/>
      <WeakWeather/>
    </div>
}

export default Bottom;