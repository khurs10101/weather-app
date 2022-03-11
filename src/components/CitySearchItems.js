import React from "react"
import styles from './citysearchitems.module.css'

export default (props) => {
    const { data } = props
    return (<div className={styles.root}>
        <div>{data?.name}</div>
        <div>+</div>
    </div>)
}