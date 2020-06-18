import React, { Component } from 'react'
import Title from '../Title';
//import Button from '../Button'
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart'
import CartList from './CartList'
import CartTotal from './CartTotal'
import { ProductConsumer } from '../../context'

class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {
                        (value) => {
                            const {cart} = value;
                            if (cart.length > 0){
                                return (
                                    <div style={{ overflow: 'hidden'}}>
                                    <Title name="your" title="cart" />
                                    <CartColumns />
                                    <CartList value={value} />
                                    <CartTotal value={value}/>
                                    </div>
                                );
                            } else {
                                return (<EmptyCart />);
                            }
                        }
                    }
                </ProductConsumer>
            </section>
        )
    }
}

export default Cart;