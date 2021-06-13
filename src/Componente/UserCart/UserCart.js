import React from 'react';

const UserCart = (props) => {
    const cart = props.cart;
     const total = cart.reduce((total,prd ) => total + prd.Seller , 0 )

    return (
        <div>
            <h4>Count Something</h4>
            <h4>Total Member Added: {cart.length}</h4>
            <h5>Total Amount: ৳ {total} BDT</h5>
        </div>
    );
};

export default UserCart;