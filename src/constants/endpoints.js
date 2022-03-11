import { WEATHER_KEY } from '../configs'
export const WEATHER_ROOT_URL = "https://api.weatherapi.com/v1"
export const WEATHER_SEARCH_URL = `${WEATHER_ROOT_URL}/search.json?key=${WEATHER_KEY}&q=`
export const WEATHER_GET_DATA = `${WEATHER_ROOT_URL}/current.json?key=${WEATHER_KEY}&q=`