import * as searchSaga from '../features/Weather/duck/weatherSaga'
import { spawn, all } from 'redux-saga/effects'

export default function* rootSaga() {
    yield all([
      spawn(searchSaga.watchSearch),
    ])
  } 