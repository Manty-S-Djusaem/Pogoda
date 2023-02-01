import React from 'react';
import module from './WeatherCard.module.scss'
import sun from '../assets/sun.png'
import { NavLink } from 'react-router-dom';
import Clock from './Clock';
import { useState } from 'react';

const api = {
    key: '195f6198cdf22a2f90f90eedbe796bcb',
    base: 'https://api.openweathermap.org/data/2.5/',
    // base: 'api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid={195f6198cdf22a2f90f90eedbe796bcb}'
    // base: 'https://pro.openweathermap.org/data/2.5/forecast/hourly?q={search}&appid={195f6198cdf22a2f90f90eedbe796bcb}',
    
}

function WeatherCard(props) {
        
    const [search, setSearch] = useState("");
    const [weather, setWeather] = useState({});

    const searchPressed = () => {
        // console.log(`${api.base}/forecast?q=${search}&limit=9&appid=${api.key}`)
        // fetch(`${api.base}/weather?q=${search}&units=metric&APPID=${api.key}`)
        fetch(`${api.base}/weather?q=${search}&units=metric&APPID=${api.key}`)
            .then(res => res.json())
            .then(result => {
                setWeather(result);
                console.log(result);
            })
    }

    return (
        <div className={module.container}>
            <div className={module.card}>


                <div className={module.card_image}>
                    <img src={sun} />
                </div>
                <div className={module.currentDay}>
                    <Clock />
                </div>
                <div>
                    <input
                        type='text' placeholder='Enter city/town...'
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button onClick={searchPressed}>Search</button>
                </div>

                {typeof weather.main != "undefined" ?
                    <div>
                        <p className={module.city}>{weather.name}</p>

                        <p className={module.temperature}>{weather.main.temp}°C</p>

                        <p className={module.description}>{weather.weather[0].main}</p>
                        <p className={module.description}>{weather.weather[0].description}</p>
                    </div>
                    :
                    ''
                }
                <div className={module.num_data}>
                    <NavLink to='about'>About</NavLink >
                    <br />
                    <NavLink to='above'>About1</NavLink >
                    {/* <h4>Bishkek</h4> */}
                </div>

            </div>
        </div>
    );
}

export default WeatherCard;