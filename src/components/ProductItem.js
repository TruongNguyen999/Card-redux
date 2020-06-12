import React, { Component } from 'react';
import * as message from './consts/message';

class ProductItem extends Component {
    render() {
        const { product } = this.props;
        
        return (
            <div className="col-lg-4 col-md-6 mb-r">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        <img src={product.images}
                            className="img-fluid" alt={product.name} />
                        <a href="true">
                            <div className="mask waves-light waves-effect waves-light"></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                                <a href="true">{product.name}</a>
                            </strong>
                        </h4>
                        <ul className="rating">
                            <li>
                                {this.onshowrating(product.rating)}
                            </li>
                        </ul>
                        <p className="card-text">
                            Sản phẩm do apply sản xuất
                                        </p>
                        <div className="card-footer">
                            <span className="left">{product.price}</span>
                            <span className="right">
                                <a href className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Cart">
                                    <i className="fa fa-shopping-cart" onClick={() => this.onAddToCart(product)}></i>
                                </a>
                            </span>
                        </div>
                    </div>
                </div> 
            </div>
        );
    }
    onshowrating = (rating) => {
        let result = [];
        if(rating > 0){
            for(let i=1;i<=rating;i++){
                result.push(<i key={i} className="fa fa-star"></i>)
            }
            for(let j=1;j<=(5-rating);j++){
                result.push(<i key={j + 5} className="fa fa-star-o"></i>)
            }
        }
        return result;
    }

    onAddToCart = (product) => {
        this.props.addToCart(product);
        this.props.onChangeMessage(message.MESSAGE_ADD_TO_CART)
    }
}

export default ProductItem;