import {combineReducers, compose} from 'redux'

import { createStore,applyMiddleware } from 'redux'
// import {composewithDevTools} from 'redux-devtools-extension'

import {thunk} from 'redux-thunk'
import { getAllPizzasReducer } from './Reducers/pizzaReducer'


const FinalReducer = combineReducers({
    getAllPizzasReducer : getAllPizzasReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialstate= {}
const store = createStore(FinalReducer,initialstate,composeEnhancers(applyMiddleware(thunk)))


export default store