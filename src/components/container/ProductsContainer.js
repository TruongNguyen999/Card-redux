import React, { Component } from 'react';
import Products from '../Products';
import { connect } from 'react-redux';
import ProductItem from '../ProductItem';
import PropTypes from 'prop-types';
import * as actions from '../actions/index';

class ProductsContainer extends Component {
    render() {
        const { products } = this.props;

        return (
            <Products>
                {this.onshowproducts(products)}
            </Products>
        );
    }

    onshowproducts = (products) => {
        const { addToCart, onChangeMessage } = this.props;
        let result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <ProductItem 
                            key={index} 
                            product={product} 
                            index={index} 
                            addToCart={addToCart} 
                            onChangeMessage={onChangeMessage}
                        />
            })
        }
        return result;
    }
}

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            images: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
            price: PropTypes.number.isRequired
        })
    ).isRequired,
    addToCart: PropTypes.func.isRequired,
    onChangeMessage: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        products: state.Products
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        addToCart: (product) => {
            dispatch(actions.addToCarts(product))
        },
        onChangeMessage: (message) => {
            dispatch(actions.onChangeMessage(message))
        }   
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);