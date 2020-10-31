import * as types from '../consts/index';

const data = JSON.parse(localStorage.getItem('CART'));

const initialState = data ? data : [];

const findID = (state, id) => {
    let result = -1;
    state.forEach((product, index) => {
        if (product.product.id === id) {
            result = index;
        }
    });
    return result;
}

const myReducer = (state = initialState, action) => {
    let index = -1
    switch (action.type) {
        case types.ADD_TO_CARTS:
            let id = action.product.id;
            let result = state.find((cart) => {
                return cart.product.id === id
            })
            if (result) {
                index = findID(state, id);
                state[index] = {
                    ...state[index],
                    quantity: state[index].quantity + 1
                }
            }
            else {
                const cart = {
                    product: {
                        id: action.product.id,
                        name: action.product.name,
                        images: action.product.images,
                        description: action.product.description,
                        rating: action.product.rating,
                        price: action.product.price
                    },
                    quantity: 1
                }
                state.push(cart);
            }

            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
            
        case types.DELETE_PRODUCT_ITEM:
            let productID = action.cart.product.id;
            index = findID(state, productID);
            if (index !== -1) {
                state.splice(index, 1);
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];

        case types.UPDATE_PRODUCT_INTO_CART:
            let updateProductID = action.product.id;
            index = findID(state, updateProductID);
            if(index !== -1){
                state[index].quantity = action.quantity
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];

        default:
            return state;
    }
}

export default myReducer;