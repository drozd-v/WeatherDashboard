import React from 'react'
import Search from './components/Search'
import WeatherList from './components/WeatherList'
import { AppStateType } from '../../store'

const Weather:React.FC<{}> = () => {
    return (
        <>
           <Search />
           <WeatherList />
        </>
    )
}

export default Weather
