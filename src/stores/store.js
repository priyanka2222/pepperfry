import {userReducer} from '../Redux/User/reducer'
import {createStore, combineReducers} from 'redux'

const rootReducer = combineReducers({
    userState : userReducer
})
export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__())