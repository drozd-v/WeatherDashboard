import {CityWeatherType, actions} from '.'
import { takeLatest, put } from 'redux-saga/effects'

export function* watchSearch() {
    yield takeLatest(actions.getWeather.type, getWeatherFetch)
}

const url = 'https://api.openweathermap.org/data/2.5/weather?appid=613b8442cb3a2b59f8b2c529ca1a64d0'

function* getWeatherFetch(action: ReturnType<typeof actions.getWeather>) {
    try {
        const data: CityWeatherType = yield fetch(`${url}&q=${action.payload}`)
            .then(res => res.json())
            .catch(err => console.error(err))
        
        yield put(actions.getWeatherSuccess(data))
    } catch {
        yield put(actions.getWeatherError())
    }
   
}