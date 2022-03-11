import React from "react";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import styles from './menuitem.module.css'
import '../App.css'

const MenuItems = (props) => {
    const { data } = props
    let navigate = useNavigate()
    const handleOnClick = () => {
        navigate(data.link)
    }

    return (<div className={styles.menuItems} onClick={handleOnClick}>
        <div className={styles.menuItemInner}></div>
        <div>{data.title}</div>
    </div>)
}


MenuItems.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired
    })
}

export default MenuItems