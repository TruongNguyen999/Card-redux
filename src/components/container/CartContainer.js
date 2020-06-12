import React, { Component } from 'react';
import { connect } from 'react-redux';
import Carts from '../Carts';
import PropTypes from 'prop-types';
import CartItem from '../CartItem';
import CartResult from '../CartResult';
import * as actions from './../actions/index';

class CartContainer extends Component {
    render() {
        const { cart } = this.props;

        return (
            <Carts>
                {this.onshowCart(cart)}
                {this.onshowTotalAmount(cart)}
            </Carts>
        );
    }
    onshowCart = (cart) => {
        const { onDeleteProductItem, onChangeMessage, onUpdateProductInCart } = this.props;
        let result = [];
        if (cart.length > 0) {
            result = cart.map((cart, index) => {
                return <CartItem 
                            key={index} 
                            index={index} 
                            cart={cart} 
                            onDeleteProductItem={onDeleteProductItem} 
                            onChangeMessage={onChangeMessage}
                            onUpdateProductInCart={onUpdateProductInCart}
                        />
            })
        }
        return result;
    }
    onshowTotalAmount = (cart) => {
        let result = null;
        if (cart.length > 0) {
            result = <CartResult cart={cart} />
        }
        return result;
    }
}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                images: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                rating: PropTypes.number.isRequired,
                price: PropTypes.number.isRequired
            }),
            quantity: PropTypes.number.isRequired
        })
    ).isRequired,
    onChangeMessage: PropTypes.func.isRequired,
    onUpdateProductInCart: PropTypes.func.isRequired,
    onDeleteProductItem: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        cart: state.Cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProductItem: (cart) => {
            dispatch(actions.onDeleteProduct(cart))
        },
        onChangeMessage: (message) => {
            dispatch(actions.onChangeMessage(message))
        },
        onUpdateProductInCart: (product, quantity) => {
            dispatch(actions.onUpdateProductInCart(product, quantity))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);