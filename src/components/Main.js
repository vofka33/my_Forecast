import React from "react";
import {useState} from "react";
import "../styles/Main.css"
import Weather from "./Weather";
import Forecast from "./Forecast"



function Main() {
    const [city, setCity] = useState('Москва')
    const cityList = ['Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург','Казань', 'Нижний Новгород', 'Челябинск',
    'Красноярск', 'Самара', 'Уфа', 'Ростов-на-Дону', 'Омск', 'Краснодар', 'Воронеж', 'Волгоград'];
    const options = cityList.map((text, index) => {
        return <option key={index}>{text}</option>;
    });


    return(
        <main>
            <div className="selector">
                <div className="main_block">
                    <div>Выберите город:</div>
                    <div>
                        <select value={city} onChange={e=>setCity(e.target.value)}>
                            <option disabled>Выберите город</option>
                            {options}
                        </select>
                    </div>
                </div>
            </div>
            <Weather city = {city}/>
            <Forecast city = {city}/>
        </main>
    )
}

export default Main;

// function Main (){
//
//     const cityList = ['Москва', 'Самара', 'Анадырь', 'Санкт-Петербург','Магадан', 'Новосибирск', 'Екатеринбург', 'Казань', 'Нижний Новгород',
//         'Челябинск', 'Ростов-на-Дону', 'Уфа', 'Омск', 'Красноярск', 'Воронеж', 'Пермь', 'Волгоград', 'Якутск'];
//
//     // Наполняем содержимое select
//     const options = cityList.map((text, index) => {
//         return <option key={index}>{text}</option>;
//         console.log ("options=", options)
//     });
//
//         return (
//             <div className="itemRight">
//                 <select value={city} onChange={e=>setCity(e.target.value)}>
//                     <option disabled>Выберите город</option>
//                     {options}
//                 </select>
//             </div>
//         );
//
//
// }
//
// export default Main;
