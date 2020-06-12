// import * as types from '../consts/index';
import { combineReducers } from 'redux';
import Products from './Products';
import Cart from './Cart';
import Message from './Message';

const myReducer = combineReducers({
    Products,
    Cart,
    Message
})

export default myReducer;