import React from "react";
import styles from './card.module.css'
import '../App.css'
import { addCityData, addToFavorite } from "../database";
import { connect } from "react-redux";
import CustomModal from "./CustomModal";
import { actionFetchCityWeatherData, actionModalClose, actionMsgModalOpen } from "../redux/actions";

let Card = (props) => {
    const { cardType, data } = props
    let content = <div></div>

    const handleOnClick = (e) => {
        const { name } = e.target
        if (name === 'searchBtnAdd') {
            addCityData(data?.name)
            props.closeModal()
            props.openMessageModal(`${data?.name} is added to City list`)
        }

        if (name === 'favBtn') {
            if (props?.currentWeather.city) {
                addToFavorite(props?.currentWeather)
                props.openMessageModal(`${props?.currentWeather?.city} is added to favorite list`)
            }
        }
    }

    if (cardType === 'citiesMenu') {
        content = (
            <div onClick={() => {
                props.fetchWeather(data)
            }} className={styles.cmRoot}>
                <div>{data}</div>
            </div>
        )
    }

    if (cardType === 'searchMenu') {
        content = (
            <div className={styles.sRoot}>
                <div>{data?.name}</div>
                <button onClick={handleOnClick} name="searchBtnAdd" className="circle">+</button>
            </div>
        )
    }

    if (cardType === 'weatherInfo') {
        content = (<div>
            <CustomModal modalType='messageModal' />
            <div className="top-bar">
                <div>Weather Info</div>
                <button name="favBtn" onClick={handleOnClick} className={`circle ${styles.favoriteBtn}`}>F</button>
            </div>
            {props?.currentWeather?.city && <div className={styles.wiContent}>
                <div className="text-w-3">{props?.currentWeather?.city}</div>
                <div className="mt-1 flex-column-center">
                    <img className="w-icons" src={props?.currentWeather?.icon} />
                    <div className="text-w-2">Condition: {props?.currentWeather?.condition}</div>
                </div>
                <div className="mt-2 flex-column-center">
                    <div className="text-w-2">Temperature</div>
                    <div className="text-w-1">{props?.currentWeather?.temp_c} degree C</div>
                </div>
                <div className="mt-2 flex-column-center">
                    <div className="text-w-2">Wind Speed</div>
                    <div className="text-w-1">{props?.currentWeather?.wind_kph} kph</div>
                </div>
            </div>}
        </div>)
    }

    if (cardType === 'favoriteList') {
        content = (<div className={`flex-column-center ${styles.flRoot}`}>
            <div className="text-w-3">{data?.city}</div>
            <img src={data?.icon} />
            <div className="text-w-2">{data?.condition}</div>
            <div className="text-w-2">{`${data?.temp_c}`} <span>&#8451;</span></div>
            <div className="text-w-2">{data?.wind_kph} kph</div>
        </div>)
    }

    return (<>{content}</>)
}

const mapStateToProps = (state) => {
    return {
        currentWeather: state.currentWeather
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => dispatch(actionModalClose()),
        fetchWeather: (city) => dispatch(actionFetchCityWeatherData(city)),
        openMessageModal: (message) => dispatch(actionMsgModalOpen(message))
    }
}

Card = connect(mapStateToProps, mapDispatchToProps)(Card)
export default Card