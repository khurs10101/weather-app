import { combineReducers } from "redux"
import CitySearchReducer from "./CitySearchReducer"
import CurrentWeatherReducer from "./CurrentWeatherReducer"
import ModalReducer from "./ModalReducer"

export default () => {
    return combineReducers({
        modalValue: ModalReducer,
        citySearch: CitySearchReducer,
        currentWeather: CurrentWeatherReducer
    })
}