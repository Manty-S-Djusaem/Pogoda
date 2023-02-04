import React from 'react';
import module from './WeatherCard.module.scss'
import sun from '../assets/sun.png'
import { NavLink } from 'react-router-dom';
import Clock from './Clock';
import { useState } from 'react';

const api = {
    key: '195f6198cdf22a2f90f90eedbe796bcb',
    base: 'https://api.openweathermap.org/data/2.5/',
    city_name: 'Bishkek',
    // base: 'api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid={195f6198cdf22a2f90f90eedbe796bcb}'
    // base: 'https://pro.openweathermap.org/data/2.5/forecast/hourly?q={search}&appid={195f6198cdf22a2f90f90eedbe796bcb}',

}

function WeatherCard(props) {

    const [search, setSearch] = useState("");
    const [weather, setWeather] = useState(null);

    const searchPressed = () => {
        fetch(`${api.base}forecast?q=${api.city_name}&appid=${api.key}`)

            .then(res => res.json())
            .then((result) => {
                setWeather(result);
                console.log('Data List Loaded', result);
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

                {weather && (
                    <div className={module.days}>
                        <div className={module.card1}>
                            <p className={module.city}>{weather.city.name}</p>

                            <p className={module.temperature}>{weather.list[9].main.temp}°K</p>

                            <p className={module.description}>{weather.list[0].weather[0].main}</p>
                        </div>

                        <div className={module.card2}>
                            <p className={module.city}>{weather.city.name}</p>

                            <p className={module.temperature}>{weather.list[1].main.temp}°K</p>

                            <p className={module.description}>{weather.list[1].weather[0].main}</p>
                        </div>

                        <div className={module.card3}>
                            <p className={module.city}>{weather.city.name}</p>

                            <p className={module.temperature}>{weather.list[2].main.temp}°K</p>

                            <p className={module.description}>{weather.list[2].weather[0].main}</p>
                        </div>

                        <div className={module.card4}>
                            <p className={module.city}>{weather.city.name}</p>

                            <p className={module.temperature}>{weather.list[3].main.temp}°K</p>

                            <p className={module.description}>{weather.list[3].weather[0].main}</p>
                        </div>

                        <div className={module.card5}>
                            <p className={module.city}>{weather.city.name}</p>

                            <p className={module.temperature}>{weather.list[4].main.temp}°K</p>

                            <p className={module.description}>{weather.list[4].weather[0].main}</p>
                        </div>


                    </div>
                )}

                {weather && (
                    <div className={module.dayly}>
                        <div className={module.timeCards}>
                            <p className={module.dayCards}>Morning</p>
                            <p className={module.dayD}></p>
                        </div>

                        <div className={module.timeCards}>
                            <p className={module.dayCards}>Day</p>
                            <p className={module.dayD}></p>
                        </div>

                        <div className={module.timeCards}>
                            <p className={module.dayCards}>Evening</p>
                            <p className={module.dayD}></p>
                        </div>
                    </div>
                )}
                <div className={module.num_data}>
                    {/* <NavLink to='about'>About</NavLink >
                    <br />
                    <NavLink to='above'>About1</NavLink > */}
                    {/* <h4>Bishkek</h4> */}
                </div>

            </div>
        </div>
    );
}

export default WeatherCard;