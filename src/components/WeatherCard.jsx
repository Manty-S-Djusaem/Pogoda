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
        fetch(`${api.base}forecast?q=${search}&appid=${api.key}`)

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
                <div className={module.searchM}>
                    <input
                        type='text' placeholder='Enter city/town...'
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button onClick={searchPressed}>Search</button>
                </div>

                {weather && (

                    <div className={module.dayly}>
                        <div className={module.timeCards}>
                            <p className={module.day_data}>Morning</p>
                            <p className={module.dayCards}>{weather.list[10].main.temp}°C</p>
                        </div>

                        <div className={module.timeCards}>
                            <p className={module.day_data}>Day</p>
                            <p className={module.dayCards}>{weather.list[12].main.temp}°C</p>
                        </div>

                        <div className={module.timeCards}>
                            <p className={module.day_data}>Evening</p>
                            <p className={module.dayCards}>{weather.list[15].main.temp}°C</p>
                        </div>
                    </div>

                )}

                {weather && (
                    <div className={module.days}>
                        <div className={module.card1}>
                            <p className={module.city}>Mond</p>

                            <p className={module.temperature}>{weather.list[13].main.temp-273}°C</p>

                            <p className={module.description}>{weather.list[13].weather[0].description}</p>
                        </div>

                        <div className={module.card2}>
                            <p className={module.city}>Tuesd</p>

                            <p className={module.temperature}>{weather.list[21].main.temp}°C</p>

                            <p className={module.description}>{weather.list[21].weather[0].description}</p>
                        </div>

                        <div className={module.card3}>
                            <p className={module.city}>Wensd</p>

                            <p className={module.temperature}>{weather.list[29].main.temp}°C</p>

                            <p className={module.description}>{weather.list[29].weather[0].description}</p>
                        </div>

                        <div className={module.card4}>
                            <p className={module.city}>Thsd</p>

                            <p className={module.temperature}>{weather.list[37].main.temp}°K</p>

                            <p className={module.description}>{weather.list[37].weather[0].description}</p>
                        </div>

                        <div className={module.card5}>
                            <p className={module.city}>Fridy</p>

                            <p className={module.temperature}>{weather.list[0].main.temp}°K</p>

                            <p className={module.description}>{weather.list[0].weather[0].description}</p>
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