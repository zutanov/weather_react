import React from 'react';

export const Card = ({day, icon, icon_desc, temp_max,temp_min}) => {
    return (
      
        <div className="card">
           <p className="today__date">{day}</p>
           <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt='icon' className="today__icon" />
           <p className="today__desc">{icon_desc[0].toUpperCase()+icon_desc.slice(1,icon_desc.length)}</p>
           <p className="today__temp-max">Max {Math.ceil(temp_max)}&#176;</p>
           <p className="today__temp-min">Min {Math.floor(temp_min)}&#176;</p>
        </div>
    );
};

