import { CITY_STORAGE, FAVORITE_STORAGE } from "../constants"

export const addCityData = (city) => {
    let cityList = localStorage.getItem(CITY_STORAGE)
    if (cityList != null) {
        cityList = JSON.parse(cityList)
        cityList.push(city)
    } else {
        cityList = []
        cityList.push(city)
    }
    localStorage.setItem(CITY_STORAGE, JSON.stringify(cityList))
}

export const getCityList = () => {
    let cityList = []
    if (localStorage.getItem(CITY_STORAGE) != null) {
        cityList = JSON.parse(localStorage.getItem(CITY_STORAGE))
    }

    return cityList
}

export const addToFavorite = (data) => {
    let favorites = localStorage.getItem(FAVORITE_STORAGE)
    if (favorites != null) {
        favorites = JSON.parse(localStorage.getItem(FAVORITE_STORAGE))
        favorites.push(data)
    } else {
        favorites = []
        favorites.push(data)
    }
    localStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites))
}

export const getFavoriteList = () => {
    let favoriteList = []
    if (localStorage.getItem(FAVORITE_STORAGE) != null) {
        favoriteList = JSON.parse(localStorage.getItem(FAVORITE_STORAGE))
    }

    return favoriteList
}