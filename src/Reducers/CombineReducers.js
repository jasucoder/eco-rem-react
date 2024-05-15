


import {combineReducers} from 'redux'
import CountReducer from './CoReducers'
import LoginReducer from './Loginreducer'
import CartReducer from './CartReducer'
//import LoginReducer from './Loginreducer'

export default combineReducers({

    CountReducer,
   LoginReducer,
   CartReducer
})

