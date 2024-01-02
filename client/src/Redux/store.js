import {getAllPizzasReducers} from "./Reducers/pizzaReducer"
import { createStore } from "redux";
export const store = createStore(getAllPizzasReducers)
