import { SET_CURRENT_WEATHER_DATA } from "../actions"

const initalState = {
    city: '',
    temp_c: 0,
    wind_kmph: 0,
    condition: '',
    icon: ''
}

export default (state = initalState, action) => {
    let data = action.payload
    switch (action.type) {
        case SET_CURRENT_WEATHER_DATA:
            return {
                city: data?.location?.name,
                temp_c: data?.current?.temp_c,
                wind_kph: data?.current?.wind_kph,
                condition: data?.current?.condition?.text,
                icon: data?.current?.condition?.icon
            }
        default:
            return state
    }
}