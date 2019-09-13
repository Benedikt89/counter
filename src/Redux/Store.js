import {applyMiddleware, combineReducers, createStore} from "redux";
import counterReducer from './CounterReducer';
import thunk from "redux-thunk";

let reducers = combineReducers({
   counterReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;