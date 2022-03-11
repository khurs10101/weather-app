import { WEATHER_GET_DATA, WEATHER_ROOT_URL, WEATHER_SEARCH_URL } from "../constants/endpoints"

export const searchCityData = async (query) => {
    let response = null
    try {
        let url = WEATHER_SEARCH_URL + query
        response = await fetch(url)
        response = await response.json()
    } catch (e) {
        console.error('apis->searchWeatherData ' + e)
    }

    return response
}

export const getCityWeatherInfo = async (city) => {
    let response = null
    city = city?.toLowerCase()
    try {
        let url = WEATHER_GET_DATA + city + "&aqi=no"
        response = await fetch(url)
        response = await response.json()
    } catch (e) {
        console.error('apis->getCityWeatherInfo ' + e)
    }

    return response
}