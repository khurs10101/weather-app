import React from "react";
import Modal from 'react-modal'
import { connect } from "react-redux";
import { actionFetchCitySearchData, actionModalClose, actionMsgModalClose, actionUnsetCitySearchData } from "../redux/actions";
import styles from './custommodal.module.css'
import '../App.css'
import Card from "./Card";
import { debounce } from "../helpers";


let CustomModal = (props) => {

    const { modalType } = props
    const isOpen = modalType === 'searchModal' ? props.modalValue.isOpen : props.modalValue.isMsgOpen

    Modal.setAppElement(document.getElementById('root'))

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    const handleOnChange = debounce((e) => {
        const { name, value } = e.target
        if (name === 'search') {
            props.fetchSearch(value)
        }
    })

    const handleOnClick = (e) => {
        const { name } = e.target
        if (name === 'msgClose') {
            props.msgModalClose()
        }

        if (name === 'modalClose') {
            props.clearSearchData()
            props.closeModal()
        }
    }

    let modalContent = <div></div>

    if (modalType === 'searchModal') {
        modalContent = (<div className={styles.modalRoot}>
            <div className="top-bar">
                <div>Add city modal</div>
                <button name="modalClose" onClick={handleOnClick} className={`circle ${styles.closeBtn}`}>X</button>
            </div>
            <div className={styles.searchBarWrapper}>
                <input name="search" onChange={handleOnChange} className={styles.searchBar} type={'text'} placeholder={'Search'} />
            </div>
            <div>
                {
                    props.citySearch.map((city, idx) => <Card cardType={'searchMenu'} data={city} key={idx} />)
                }
            </div>
        </div>)
    }


    if (modalType === 'messageModal') {
        modalContent = (<div className={`flex-column-center ${styles.modalRoot}`}>
            <div className="text-w-1">{props?.modalValue?.message}</div>
            <button className="mt-2" name="msgClose" onClick={handleOnClick}>Ok</button>
        </div>)
    }


    return (<div>
        <Modal
            isOpen={isOpen}
            style={customStyles}
            contentLabel="Example Modal">
            {modalContent}
        </Modal>
    </div>)
}

const mapStateToProps = (state) => {
    return {
        modalValue: state.modalValue,
        citySearch: state.citySearch
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => dispatch(actionModalClose()),
        clearSearchData: () => dispatch(actionUnsetCitySearchData()),
        fetchSearch: (query) => dispatch(actionFetchCitySearchData(query)),
        msgModalClose: () => dispatch(actionMsgModalClose())
    }
}

CustomModal = connect(mapStateToProps, mapDispatchToProps)(CustomModal)

export default CustomModal