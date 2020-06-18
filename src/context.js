import React, { Component } from 'react';
import { storeProducts, detailProducts } from './data';

const ProductContext = React.createContext();


// Provider
export class ProductProvider extends Component {
    state = {
        products: [],
        detailProducts: detailProducts,
        cart: [],
        modalOpen: false,
        modalProduct: detailProducts,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
    }

    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach((item) => {
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem]
        })
        this.setState(() => {
            return {
                products: tempProducts
            }
        })
    }

    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        console.log(id, product);
        return product;
    }

    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return {
                detailProducts: product
            }
        })
    }

    addToCart = (id) => {
        console.log('Add to cart', id);
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;

        this.setState(() => {
            return {
                products: tempProducts,
                cart: [...this.state.cart, product]
            };
        }, () => {
            console.log(this.state);
            this.addTotal();
        });
    }

    openModal = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return {
                modalProduct: product,
                modalOpen: true
            };
        });
    }

    closeModal = () => {
        this.setState({
            modalOpen: false
        });
    }

    increment = (id) => {
        console.log('increament');
    }

    decrement = (id) => {
        console.log('decrement');
    }
    removeItem = (id) => {
        console.log('Item removed');
    }
    clearCart = (id) => {
        console.log('Cart cleared');
        this.setState({
            cart: []
        }, () => {
            this.setProducts();
        });
    }
    componentDidMount() {
        this.setProducts();
    }
    addTotal = () => {
        let subTotal = 0;
        this.state.cart.map((item) => subTotal += item.total);
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        this.setState(() => {
            return {
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal: total
            }
        })
    }
    //tester = () => {
    //    console.log('State Product:', this.state.products[0].inCart);
    //    console.log('Data Product: ', storeProducts[0].inCart);

    //    const tempProduct = [...this.state.products];
    //    tempProduct[0].inCart = true;
    //    this.setState(() => {
    //        return {
    //            products: tempProduct
    //        }
    //    }, () => {
    //        console.log('State Product:', this.state.products[0].inCart);
    //        console.log('Data Product: ', storeProducts[0].inCart);
    //    })
    //}
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart
            }}>
                {/*<button onClick={this.tester}>TEst me</button>*/}
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

// Consumer
export const ProductConsumer = ProductContext.Consumer;