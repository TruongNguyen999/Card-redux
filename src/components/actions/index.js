import * as types from '../consts/index';

export const addToCarts = (product, quantity) => {
    return{
        type: types.ADD_TO_CARTS,
        product, 
        quantity
    }
}

export const onDeleteProduct = (cart) => {
    return{
        type: types.DELETE_PRODUCT_ITEM,
        cart
    }
}

export const onChangeMessage = (message) => {
    return{
        type: types.CHANGE_MESSAGE,
        message
    }
}

export const onUpdateProductInCart = (product, quantity) => {
    return{
        type: types.UPDATE_PRODUCT_INTO_CART,
        product,
        quantity
    }
}