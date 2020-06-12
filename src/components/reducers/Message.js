import * as Message from './../consts/message';
import * as types from './../consts/index';

const initialState = Message.WELCOME_SHOP_ONLINE;

const message = (state = initialState, action) => {
    switch(action.type){
        case types.MESSAGE:
            return state;

        case types.CHANGE_MESSAGE:
            return action.message;
            
        default: 
            return state;
    }
}
export default message;