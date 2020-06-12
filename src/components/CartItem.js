import React, { Component } from 'react';
import * as message from './consts/message';

class CartItem extends Component {
    render() {

        const { cart } = this.props;

        return (
            <tr>
                <th scope="row">
                    <img src={cart.product.images}
                        alt={cart.product.name} className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{cart.product.name}</strong>
                    </h5>
                </td>
                <td>{cart.product.price}$</td>
                <td className="center-on-small-only">
                    <span className="qty">{cart.quantity}</span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label 
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                            onClick={() => this.onUpdateProductInCart(cart.product, cart.quantity - 1)}
                        >
                            <a 
                                href
                            >
                                —
                            </a>
                        </label>
                        <label 
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light" 
                            onClick={() => this.onUpdateProductInCart(cart.product, cart.quantity + 1)}
                        >
                            <a 
                                href
                            >
                                +
                            </a>
                        </label>
                    </div>
                </td>
                <td>{this.onshowSubTotal(cart.product.price, cart.quantity)}$</td>
                <td>
                    <button type="button" 
                            className="btn btn-sm btn-primary waves-effect waves-light" 
                            data-toggle="tooltip" 
                            data-placement="top"
                            title="" 
                            data-original-title="Remove item"
                            onClick={() => this.Delete(cart)}
                    >
                        X
                    </button>
                </td>
            </tr>
        );
    }
    onshowSubTotal = (price, quantity) => {
        return price * quantity;
    }

    Delete = (cart) => {
        this.props.onDeleteProductItem(cart);
        this.props.onChangeMessage(message.MESSAGE_DELETE_CART)
    }

    onUpdateProductInCart = (product, quantity) => {
        if(quantity > 0){
            this.props.onUpdateProductInCart(product, quantity);
            this.props.onChangeMessage(message.MESSAGE_UPDATE_CART)
        }
    }
}

export default CartItem;