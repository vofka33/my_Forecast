import * as React from "react";
import axios from "axios";
import {useState} from "react";
import {API_KEY} from "../../api_key";
import "../styles/Weather.css"

function Weather(props) {
    const city = props.city
    const [cityName, setCity] = useState();
    const [weather, setWeather] = useState([]);
    const weather_url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&exclude=current,minutely&lang=ru&APPID=${API_KEY}`;

    let cityStayed = cityName == city;

    if (!cityStayed) {
            axios.get(weather_url).then(res => {
                setCity(res.data.name);
                setWeather(res.data.main)
            })
        };

        return (
            <main>
                <div className='section'>
                    <div>
                        <div className="blockCenter">
                            Текущая погода в городе {cityName}
                        </div>
                        <div className="block">
                            <div className="blockLeft">Температура &deg;C</div>
                            <div className="blockRight">{weather.temp}</div>
                        </div>
                        <div className="block">
                            <div className="blockLeft">Ощущается как &deg;C</div>
                            <div className="blockRight">{weather.feels_like}</div>
                        </div>
                        <div className="block">
                            <div className="blockLeft">Давление мм рт. ст.</div>
                            <div className="blockRight">{Math.round(weather.pressure * 0.75006156)}</div>
                        </div>
                        <div className="block">
                            <div className="blockLeft">Влажность</div>
                            <div className="blockRight">{weather.humidity}</div>
                        </div>
                    </div>
                </div>

            </main>
        )
}

export default Weather;
