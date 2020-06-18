import React, { Component } from 'react'
import Product from './Product';
import Title from './Title';
import { ProductConsumer } from '../context';

export default class ProuctList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products" />
                        <div className="row">
                            <ProductConsumer>
                                {(value) => (value.products.map((p) => (<Product key={p.id} id={p.id} title={p.title} img={p.img} price={p.price} info={p.info} inCart={p.inCart}/>)))
                                }
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
                {/*<Product />*/}
            </React.Fragment>            
        );
    }
}
