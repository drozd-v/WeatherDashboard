import React from 'react'
import style from './WeatherList.module.sass'
import {useSelector} from 'react-redux'
import { getCitiesWeather, getErrorText } from '../../duck/selectors'
import {useDispatch} from 'react-redux'
import { actions } from '../../duck'

const WeatherList: React.FC<{}> = () => {
    const citiesWeather = useSelector(getCitiesWeather)
    const errorText = useSelector(getErrorText)
    console.log(errorText)
    const dispatch = useDispatch()

    const clickCityWeather = (id: number) => {
        return () => {dispatch(actions.deleteCityWeather(id))}
    }
    
    return (
        <>
        {errorText && <span className={style.notFound}>Not found</span>}
        {!!citiesWeather.length 
        ? <section className={style.weather}>
            {citiesWeather.map(item => (
                <div className={style.weatherItem} key={item.id}>
                    <button className={style.button} onClick={clickCityWeather(item.id)}>Delete</button>
                    <h2 className={style.citeText}>{item.name}</h2>
                    <span  className={style.tempText}>{item.main.temp > 273
                    ? '+' + Math.round(item.main.temp-273)
                    :  Math.round(item.main.temp-273)} 
                    °C</span>
                    <img alt='icon weather' src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}/>
                </div>
            ))}
        </section>
        : <div className={style.nullSearch}>Dashboard is empty</div>
        }
        </>
    )
}

export default WeatherList
