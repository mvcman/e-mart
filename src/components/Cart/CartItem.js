import React from 'react'

function CartItem({ item, value }) {
    const { id, img, title, price, total, count } = item;
    const { increment, decrement, removeItem } = value;
    //const count = 0;
    return (
        <div className="row my-3 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} alt={title} style={{ width: '4rem', height: '4rem'}} className="img-fluid" />
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">Product: </span>
                {title}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">Price: $ </span>
                {price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-black mx-1" onClick={() => decrement(id)}>-</span>
                        <span className="btn btn-black mx-1">{count}</span>
                        <span className="btn btn-black mx-1" onClick={() => increment(id)}>+</span>
                    </div>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon" onClick={() => removeItem(id)}>
                    <i className="fas fa-trash"></i>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <strong className="d-lg-none">Item total: </strong>$ {total}
            </div>
        </div>
    )
}

export default CartItem