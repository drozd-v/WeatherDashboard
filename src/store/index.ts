import { combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import  weather, { SearchInitialStateType } from '../features/Weather/duck/index'
import { getDefaultMiddleware, configureStore } from '@reduxjs/toolkit';

export type AppStateType = {
  weather: SearchInitialStateType,
}

const reducers = combineReducers<AppStateType>({
  weather 
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: reducers,
  middleware: [...getDefaultMiddleware(), sagaMiddleware],
});

sagaMiddleware.run(rootSaga)

export default store