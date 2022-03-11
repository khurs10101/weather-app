import { applyMiddleware, createStore } from "redux"
import reducers from "./reducers"
import ReduxLogger from 'redux-logger'
import ReduxThunk from 'redux-thunk'

export default () => {
    return createStore(reducers(), applyMiddleware(ReduxThunk, ReduxLogger))
}