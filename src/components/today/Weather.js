import React, { useEffect, useState } from 'react';
import { Today } from './Today';


export const Weather = ({data}) => {
 
    return (
        <section className='weather'>
            {
                data?.main && <Today
                    name = {data.name}
                    icon = {data.weather[0].icon}
                    icon_desc = {data.weather[0].description}
                    temp = {data.main.temp}
                    temp_max = {data.main.temp_max}
                    temp_min = {data.main.temp_min}
                    feels = {data.main.feels_like}
                    humidity = {data.main.humidity}
                    wind = {data.wind.speed}
                    lat = {data.coord.lat}
                    lon = {data.coord.lon}
                    id = {data.id}
                />
            }        
        </section>
    );
};

