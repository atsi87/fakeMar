import React from 'react'

function Cart({ CartData }) {
console.log(CartData);
return (
    <div className='procuct_container'>
        {
        CartData.map((Cart, index) => (
            <div key={index}>
                <h2>{Cart.id}</h2>
            </div>
))}
    </div>
);
}

export default Cart;