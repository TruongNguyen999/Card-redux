import * as types from '../consts/index';

const initialState = [
    {
        id:1,
        name:'Samsung Galaxy S10 128Gb',
        images:'https://cdn.tgdd.vn/Products/Images/42/214909/samsung-galaxy-note-10-lite-thumb-600x600.jpg',
        description:'Sản Phẩm Do Samsung Sản Xuất',
        rating:4,
        price:120
    },  
    {
        id:2,
        name:'Điện thoại OPPO A9 2020',
        images:'https://phucanhcdn.com/media/product/30502_apple_iphone_x__silver_.jpg',
        description:'Sản Phẩm Do OOPO Sản Xuất',
        rating:3,
        price:150
    },
    {
        id:3,
        name:'Điện thoại VIVO 1820',
        images:'https://cdn.tgdd.vn/Products/Images/42/199083/vivo-y91c-400x400.jpg',
        description:'Sản Phẩm Do VIVO Sản Xuất',
        rating:5,
        price:200
    }
] 

const myReducer = (state = initialState, action) => {
    switch(action.type){
        case types.PRODUCTS:
            return [...state];
        default:
            return state;
    }
}
export default myReducer;