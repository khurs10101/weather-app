import { SET_CITY_SEARCH_DATA, UNSET_CITY_SEARCH_DATA } from "../actions"

const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CITY_SEARCH_DATA:
            return [...action.payload]
        case UNSET_CITY_SEARCH_DATA:
            return []
        default:
            return state
    }
}