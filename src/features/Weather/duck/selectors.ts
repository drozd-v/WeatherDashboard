import { AppStateType } from "../../../store";

export const getCitiesWeather = (state: AppStateType) => state.weather.cites

export const getErrorText = (state: AppStateType) => state.weather.error