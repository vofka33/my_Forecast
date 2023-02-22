import * as React from "react";
import axios from "axios";
import {useState} from "react";
import {API_KEY} from "../../api_key";
import "../styles/Forecast.css"


function Forecast(props) {

    const city = props.city
    const [response, setResponse] = useState([]);
    const [cityName, setCity] = useState();
    const forecast_url =`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=ru&appid=${API_KEY}`;


    let cityStayed= cityName == city;

    if (!cityStayed) {
        axios.get(forecast_url).then(res => {
            setCity(res.data.city.name)
            setResponse(res.data.list)
        })
    };

    var forecasts = [];

    for (let i = 5; i < response.length; i += 8) {
        forecasts.push(response[i])
    };
    console.log(city, cityName)

    return (
        <>
            <div className="section">
                <div>
                    {forecasts.map((forecast) => <div key={forecast.dt}>
                            <div className="block">
                                <div className="blockCenter">{forecast.dt_txt.slice(0, 10)}</div>
                            </div>
                            <div className="block">
                                <div className="blockLeft">Температура, &deg;C</div>
                                <div className="blockRight">{forecast.main.temp}</div>
                            </div>
                            <div className="block">
                                <div className="blockLeft">Ощущается как, &deg;C</div>
                                <div className="blockRight">{forecast.main.feels_like}</div>
                            </div>
                            <div className="block">
                                <div className="blockLeft">Давление, мм рт. ст.</div>
                                <div className="blockRight">{Math.round (forecast.main.pressure * 0.75006156)}</div>
                            </div>
                            <div className="block">
                                <div className="blockLeft">Влажность, %</div>
                                <div className="blockRight">{forecast.main.humidity}</div>
                            </div>
                        <br/>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
};

export default Forecast;

