import React, { useState } from 'react';
import './App.css';
import Top from './components/top';
import Mid from './components/mid';
import Bottom from './components/bottom';
import ClearD from './components/Assets/01d.png';
import ClearN from './components/Assets/01n.png';
import FewCloudD from './components/Assets/02d.png';
import FewCloudN from './components/Assets/02n.png';
import ScatterBroken from './components/Assets/03d-n.png';
import ShowerRain from './components/Assets/9d-n.png';
import RainD from './components/Assets/10d.png'
import RainN from './components/Assets/10n.png';
import ThunderstormD from './components/Assets/11d.png';
import ThunderstormN from './components/Assets/11n.png';
import Snow from './components/Assets/13d-n.png';
import MistD from './components/Assets/50d.png';
import MistN from './components/Assets/50n.png';

function App() {

  const [cityName, setCityName] = useState('');
  const [newCityName, setNewCityName] = useState('');
  const [temp, setTemp] = useState<number | undefined>(undefined);
  const [humidity, setHumidity] = useState<number | undefined>(undefined);
  const [feel, setFeel] = useState<number | undefined>(undefined);
  const [wind, setWind] = useState();
  const [weather, setWeather] = useState("");
  const [icon, setIcon] = useState<any>(undefined);
  const [date, setDate] = useState<any>(undefined);

  const searchBtn = async () => {
    let q = cityName;
    let BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    try {
      let response = await fetch(BASE_URL);
      let data = await response.json();
      let tempval = Math.floor(data.main.temp);
      setNewCityName(data.name);
      setTemp(tempval);
      setHumidity(data.main.humidity);
      setFeel(Math.floor(data.main.feels_like));
      setWind(data.wind.speed);
      setWeather(data.weather[0].description);

      //Icon  
      switch (data.weather[0].icon) {
        case '01d': setIcon(ClearD); break;
        case '01n': setIcon(ClearN); break;
        case '02d': setIcon(FewCloudD); break;
        case '02n': setIcon(FewCloudN); break;
        case '03d': setIcon(ScatterBroken); break;
        case '03n': setIcon(ScatterBroken); break;
        case '04d': setIcon(ScatterBroken); break;
        case '04n': setIcon(ScatterBroken); break;
        case '09d': setIcon(ShowerRain); break;
        case '09n': setIcon(ShowerRain); break;
        case '010d': setIcon(RainD); break;
        case '010n': setIcon(RainN); break;
        case '011d': setIcon(ThunderstormD); break;
        case '011n': setIcon(ThunderstormN); break;
        case '013d': setIcon(Snow); break;
        case '013n': setIcon(Snow); break;
        case '50d': setIcon(MistD); break;
        case '50n': setIcon(MistN); break;
        default:
          setIcon(ClearD);

      }

      const timestamp = data.dt;
      const date = new Date(timestamp * 1000);

      const formattedDateTime = date.toString().split(' ').slice(0, 5).join(' ');
      setDate(formattedDateTime);
    }
    catch (err) {
      console.log(err);
    }

  };

  return (
    <div className="App">
      <div className="appBody">

        <Top
          btn={searchBtn}
          cName={cityName}
          newCname={newCityName}
          setCname={(e: any) => setCityName(e.target.value)}
          dateTime={date}
        />

        <Mid
          temp={temp}
          humidity={humidity}
          feel={feel}
          wind={wind}
          weather={weather}
          image={icon}
        />

        <Bottom />
      </div>
    </div>
  );
}

export default App;