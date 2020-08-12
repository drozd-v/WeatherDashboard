import React, { useState } from 'react'
import {useDispatch, useSelector } from 'react-redux';
import { actions } from '../../duck';
import style from './Search.module.sass'

const Search: React.FC<{}> = () => {
    const [text, setText] = useState('')
    const [error, setError] = useState(false)
    const dispatch = useDispatch()

    const textSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const symbol = e.target.value
        if (/([A-Za-z0-9])/.test(symbol[symbol.length-1])){
            setText(symbol)
            setError(false)
        } else setError(true)
    }

    const inputClear = () => {
        setText('')
    }

    const addCityWeather = () => {
        dispatch(actions.getWeather(text))
        setText('')
    }

    return (
        <div>
            <input type='text' value={text} onChange={textSearchChange} />
            <button onClick={addCityWeather}>Add</button>
            <button onClick={inputClear}>Clear</button>
            {error && <span className={style.error}>You must use only A-Z,a-z,0-9, don't use other symbols </span>}
        </div>
    )
}

export default Search
