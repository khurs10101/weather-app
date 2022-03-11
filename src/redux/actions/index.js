import { getCityWeatherInfo, searchCityData } from "../../apis"

export const MODAL_OPEN = "MODAL_OPEN"
export const MODAL_CLOSE = "MODAL_CLOSE"
export const SET_CITY_SEARCH_DATA = "SET_CITY_SEARCH_DATA"
export const UNSET_CITY_SEARCH_DATA = "UNSET_CITY_SEARCH_DATA"
export const SET_CURRENT_WEATHER_DATA = "SET_CURRENT_WEATHER_DATA"
export const MSG_MODAL_OPEN = "MSG_MODAL_OPEN"
export const MSG_MODAL_CLOSE = "MSG_MODAL_CLOSE"

export const actionModalOpen = () => {
    return {
        type: MODAL_OPEN
    }
}

export const actionModalClose = () => {
    return {
        type: MODAL_CLOSE
    }
}

export const actionMsgModalOpen = (message) => {
    return {
        type: MSG_MODAL_OPEN,
        payload: message
    }
}

export const actionMsgModalClose = () => {
    return {
        type: MSG_MODAL_CLOSE,
    }
}

export const actionSetCitySearchData = (data) => {
    return {
        type: SET_CITY_SEARCH_DATA,
        payload: data
    }
}

export const actionUnsetCitySearchData = () => {
    return {
        type: UNSET_CITY_SEARCH_DATA
    }
}

export const actionSetCurrentWeatherData = (data) => {
    return {
        type: SET_CURRENT_WEATHER_DATA,
        payload: data
    }
}

export const actionFetchCitySearchData = (query) => {
    return (dispatch) => {
        searchCityData(query).then(data => dispatch(actionSetCitySearchData(data)))
    }
}

export const actionFetchCityWeatherData = (city) => {
    return (dispatch) => {
        getCityWeatherInfo(city).then(data => dispatch(actionSetCurrentWeatherData(data)))
    }
}

