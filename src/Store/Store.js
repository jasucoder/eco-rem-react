

import { createStore , applyMiddleware } from 'redux'
import combineReducers from '../Reducers/CombineReducers'
import {thunk}from 'redux-thunk'


const persistedState = localStorage.getItem('reduxStore') ? JSON.parse(localStorage.getItem('reduxStore')) : { } 

const store = createStore(combineReducers , persistedState, 
   applyMiddleware(thunk)
)

export default store

