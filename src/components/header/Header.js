import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Header = ({setData}) => {
    const [city, setCity] = useState("")
    const [inputSearch, setInputSearch] = useState([])
    
    const handleCity = (e) => {
        setCity(e.target.value)
    }

    const handleSearch = async(e) => {
        if (e.key === "Enter") {
            const {data} = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=af10c580fe01dc33a3d9c0fdb5c43c40&units=metric`)
            setData(data)
            console.log(data)
            handleClose()
            handleClear()
        }
    }

    const handleSearch2 = async(name) => {
            const {data} = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=af10c580fe01dc33a3d9c0fdb5c43c40&units=metric`)
            setData(data)
    }

    const handleClose = () => {
        setInputSearch([])
    } 

    const handleClear = () => {
        setCity("")
    }
   
     const btnSearch = async() => {
        const {data} = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9a635778b5609e2aeb338f6d215dd9f0&units=metric`)
        setData(data)
        console.log(data)
    }

    const search = async() => {
        const {data} = await axios(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=9a635778b5609e2aeb338f6d215dd9f0`)
        setInputSearch(data)
        console.log(data)
    }
    useEffect(() => {
        if(city.length > 3) {
            search()
        } else {
            handleClose()
        }
    },[city])


    return (
        <header className='header'>
            <div className='container header__container'>
                <h2 className='logo'>Weather</h2>
                <div className="header__search">
                    <input onInput={handleCity} value={city} onKeyPress={handleSearch} type="text" name="" id="" className="header__inp" placeholder='Enter the city' />
                    <button onClick={btnSearch} className="header__btn">Search</button>
                    {
                    inputSearch[0] &&  <div className='header__modal'> 
                     {
                        inputSearch.map((el, idx) => (
                        <Link className='header__result'  key={idx} onClick={() => {
                            handleSearch2(el.name)
                            handleClose()
                            handleClear()                            
                        }}>{el.name}, {el.country} {el.state}</Link>
                        )) 
                   
                }  
                    </div>
                }
                </div>
                
            </div>
        </header>
    )
}



