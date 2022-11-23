import axios from 'axios';
import React, { useEffect, useState } from 'react';
import spinner from '../assets/images/spinner.svg'

export const Today = ({name, icon, icon_desc, temp, temp_max, temp_min, feels, humidity, wind,id, lat, lon}) => {

const [daily, setDaily] = useState([])
const [air, setAir] = useState([])
const [load, setLoad] = useState(true)

const date = new Date()

const getDay = async() => {
    const {data} = await axios(`https://api.openweathermap.org/data/2.5/forecast?q=${name}&cnt=5&appid=a7d4a71d5bed5484f98b851917928861&units=metric`)
    setDaily(data)
    console.log(data?.list) 
}
const getAir = async() => {
    const {data} = await axios(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=a7d4a71d5bed5484f98b851917928861`) 
    setAir(data)
    console.log(data)
}

useEffect(() => {
    getDay()
    setTimeout(() => {
        setLoad(false)
    },2000)  
},[id])

useEffect(() => {
    getAir()
    setTimeout(() => {
        setLoad(false)
    },2000) 
 
},[id])

const divider = (el) => {
    const first = el.slice(5,10).split('-').reverse().join('.')
    const second = el.slice(11,16) 
    return `${first}     on ${second}`
}

        if(load) {
            return (<div className='spinner'>
                <img src={spinner} alt='load'/> 
                </div>)
                }    return (   
            <div className='today'>
                <div className="container today__container">
                   <h2 className="today__title">{name}</h2>
                   <div className="today__info">
                        <div className="today__left-side">
                        <img className="today__icon"
                            src={`http://openweathermap.org/img/wn/${icon}@4x.png`} alt='icon' > 
                        </img >
                        <p className="today__desc">{icon_desc[0].toUpperCase()+icon_desc.slice(1,icon_desc.length)}</p>
                        </div>
                        <div className="today__right-side">
                            <p className="today__date">{Date().slice(0,10)}</p>
                            <p className="today__time"> {date.toLocaleTimeString().slice(0,5)}</p>
                            <div className="today__main">
                                <div className="today__temp">
                                    <h2 className="today__temp-main">{Math.floor(temp)}&#176;</h2>
                                    <p className="today__temp-max">Max {Math.ceil(temp_max)}&#176;</p>
                                    <p className="today__temp-min">Min {Math.floor(temp_min)}&#176;</p>
                                </div>
                            <div className="today__feels">
                                <p className="today__feels-like">Feels like: {Math.round(feels)}&#176;</p>
                                <p className="today__humidity">Humudity: {humidity}%</p>
                                <p className="today__wind">Wind: {wind} m/s</p>
                            </div>
                            </div>
                        </div>
                   </div>
                   <div className="today__daily">
                        {
                          daily?.list && daily.list.map((el, idx) => ( 
                            <div className="today__card" key={idx}>
                                <p className="today__date">{divider(el.dt_txt)}</p>
                                <img src={`http://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`} alt='icon' className="today__icon" />
                                <p className="today__desc">{el.weather[0].description[0].toUpperCase()+el.weather[0].description.slice(1,el.weather[0].description.length)}</p>
                                <p className="today__temp-max">Max {Math.ceil(el.main.temp_max)}&#176;</p>
                                <p className="today__temp-min">Min {Math.floor(el.main.temp_min)}&#176;</p>
                            </div>           
                            )) 
                        }
                   </div>
                </div>
            </div>
            
      
    );
};

 