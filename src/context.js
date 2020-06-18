import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();


// Provider
export class ProductProvider extends Component {
    state = {
        products: storeProducts,
        detailProducts: detailProduct
    }

    handleDetail = () => {
        console.log('Hello from detail');
    }

    addToCart = () => {
        console.log('Add to cart');
    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

// Consumer
export const ProductConsumer = ProductContext.Consumer;