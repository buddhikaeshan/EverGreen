import React, { useContext } from 'react'
import './PlaceOrder.css'
import { MenuContext } from '../../context/MenuContext'

const PlaceOrder = () => {

  const { getTotalCartAmount } = useContext(MenuContext);

  return (
    <form action="">
      <div className='place-order'>
        <div className="place-order-left">
          <p className="title">Delivery Information</p>
          <div className="multi-fields-name">
            <input type="text" placeholder='First Name' />
            <input type="text" placeholder='Last Name' />
          </div>
          <div className="multi-fields">
            <input type="email" placeholder='Email@gmail.com' name="" id="" />
          </div>
          <div className="multi-fields">
            <input type="text" placeholder='Phone' name="" id="" />
          </div>
        </div>
        <div className="place-order-right">
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>Rs. {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>Rs. {getTotalCartAmount() === 0 ? 0 : 100}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p><b>Total</b></p>
              <p><b>Rs. {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 100}</b></p>
            </div>
            <hr />
            <p align="right"><button>PROCEED TO CHECKOUT PAYMENT</button></p>
          </div>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder