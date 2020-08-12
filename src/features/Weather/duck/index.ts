import {createSlice, Draft, PayloadAction} from '@reduxjs/toolkit'

export type CityWeatherType={
    weather:[
        {
        icon: string
        }
    ]
    main:{
        temp: number
    }
    name: string,
    id: number
}
export type SearchInitialStateType = {
    cites: Array<CityWeatherType>,
    error: boolean
}
const initialState: SearchInitialStateType = {
    cites: [],
    error: false
}
const searchSlice = createSlice( {
    name: 'search',
    initialState,
    reducers: {
        getWeather: (state: Draft<SearchInitialStateType>, action: PayloadAction<String>): void => {
            state.error = false
        },
        getWeatherSuccess: (state: Draft<SearchInitialStateType>, action: PayloadAction<CityWeatherType>) => {
            if (action.payload.id){
                if (!state.cites.find((city: CityWeatherType) => city.id === action.payload.id)){
                    state.cites.push(action.payload)
                }
            }else{
                state.error = true
            }
        },
        getWeatherError: (state: Draft<SearchInitialStateType>): void => {},
        deleteCityWeather: ( state: Draft<SearchInitialStateType>, action: PayloadAction<number>) => {
            state.cites = state.cites.filter(item => item.id !== action.payload)
        },
    },
})

export const {reducer, actions} = searchSlice
export default reducer
