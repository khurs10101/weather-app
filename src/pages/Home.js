import React from "react";
import { connect } from "react-redux";
import '../App.css'
import Card from "../components/Card";
import CustomModal from "../components/CustomModal";
import { getFavoriteList } from "../database";
import { actionModalOpen } from "../redux/actions";
import styles from './home.module.css'


let Home = (props) => {

    const handleOnClick = (e) => {
        const { name } = e.target
        if (name === 'openModalBtn') {
            props.modalOpen()
        }
    }

    const displayGrid = () => {
        const arrLength = getFavoriteList().slice(-4).length
        let weatherArray = getFavoriteList().slice(-4).reverse()
        const noOfRows = Math.ceil(arrLength / 2)
        let rowJsx = []
        for (let i = 0; i < noOfRows; ++i) {
            let colJsx = []
            for (let j = 0; j < 2; ++j) {
                let idx = (i * 2) + j
                if (idx < arrLength) {
                    let data = weatherArray[idx]
                    colJsx.push(<Card cardType="favoriteList" data={data} />)
                }
            }

            let eachRowJsx = (<div style={{ display: 'flex' }}>{colJsx}</div>)
            rowJsx.push(eachRowJsx)
        }

        return rowJsx
    }

    return (<div className={styles.root}>
        <CustomModal modalType='searchModal' />
        <CustomModal modalType='messageModal' />
        <div className="top-bar">
            <h1>My favorite weather</h1>
            <div>
                <button className={styles.btn} name="openModalBtn" onClick={handleOnClick}>Add new City</button>
            </div>
        </div>
        <div className={`${styles.favoriteSection}`}>
            {displayGrid()}
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
        modalOpen: () => dispatch(actionModalOpen())
    }
}

Home = connect(mapStateToProps, mapDispatchToProps)(Home)
export default Home