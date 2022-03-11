import { MODAL_CLOSE, MODAL_OPEN, MSG_MODAL_CLOSE, MSG_MODAL_OPEN } from "../actions"

const initialState = {
    isOpen: false,
    isMsgOpen: false,
    message: ''
}


export default (state = initialState, action) => {
    switch (action.type) {
        case MODAL_OPEN:
            return {
                isOpen: true
            }

        case MODAL_CLOSE:
            return {
                isOpen: false
            }
        case MSG_MODAL_OPEN:
            return {
                isMsgOpen: true,
                message: action.payload
            }
        case MSG_MODAL_CLOSE: {
            return {
                isMsgOpen: false,
                message: ''
            }
        }
        default:
            return state
    }
}