import React, { Component } from 'react'
//import Title from './Title';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';

//function Product({ id, title }) {
//    return (
//        <div>
//            <h1>{title} {id}</h1>
//        </div>
//    );
//}
class Product extends Component {
    render() {
        //console.log(this.props.product);
        const id = this.props.id;
        const title = this.props.title;
        const img = this.props.img;
        const inCart = this.props.inCart;
        const price = this.props.price;
        console.log(id, title);
        return (
            <ProductWrapper className="col-8 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <div className="img-container p-5" onClick={() => console.log('clicked me on')}>
                        <Link to="/details"><img src={img} alt="product" className="card-img-top" /></Link>
                        <button className="cart-btn" onClick={() => console.log('addded to the cart')}> 
                            {inCart ? (<p className="text-capitalize mb-0">In Cart</p>) : (<i className="fas fa-cart-plus" />)}
                        </button>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">{title}</p>
                        <h5 className="text-blue font-italic mb-0">
                            <span className="mr-1">$</span>
                            {price}
                        </h5>
                    </div>
                </div>
            </ProductWrapper>
        );
    }
}

export default Product;

const ProductWrapper = styled.div`
    .card {
        border-color: transparent;
        transition: all 1s linear;
    }
    .card-footer {
        background: transparent;
        border-top: transparent;
        transition: all 1s linear;
    }
    &:hover {
        .card {
            border: 0.04rem solid rgba(0, 0, 0, 0.2);
            box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
        }
        .card-footer {
            background: rgba(247, 247, 247);
        }
    }
    .img-container {
        position: relative;
        overflow: hidden;
    }
    .card-img-top {
        transition: all 1s linear;
    }
    .img-container:hover .card-img-top {
        transform: scale(1.2);
    }
`;