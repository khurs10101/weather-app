import React, { useEffect } from "react";
import styles from './cities.module.css'
import '../App.css'
import { connect } from "react-redux";
import CustomModal from "../components/CustomModal";
import { actionModalOpen } from "../redux/actions";
import Card from "../components/Card";
import { getCityList } from "../database";

let Cities = (props) => {

    const handleOpenModal = () => {
        props.openModal()
    }

    useEffect(() => {

    }, [])

    return (<div className={styles.root}>
        <CustomModal modalType='searchModal' />
        <div className={styles.citiesAddSection}>
            <div className="top-bar">
                <div>Cities</div>
                <button className={`circle ${styles.citiesAddBtn}`} onClick={handleOpenModal}>+</button>
            </div>
            <div className={styles.citiesMenuSection}>
                {getCityList().slice(-4).reverse().map((val, idx) => <Card key={idx} cardType={"citiesMenu"} data={val} />)}
            </div>
        </div>
        <div className={styles.citiesInfoSection}>
            <Card cardType={"weatherInfo"} />
        </div>
    </div>)
}

const mapStateToProps = (state) => {
    return {
        modalValue: state.modalValue.isOpen
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openModal: () => dispatch(actionModalOpen())
    }
}

Cities = connect(mapStateToProps, mapDispatchToProps)(Cities)
export default Cities