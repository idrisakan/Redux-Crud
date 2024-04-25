import {combineReducers, createStore } from 'redux';
import useReducer from './reducers/userReducer';
import todoReducer from './reducers/todoReducer';

//birden fazla reducer varsa bunları birleştiririz

const rootReducer = combineReducers({
    todoReducer,
    useReducer,
});
//stor oluşturma
const store = createStore(rootReducer);

//projeji tanıtmak için export
export default store;