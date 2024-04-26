import React from 'react'
import './Cart.css'
import { useContext } from 'react'
import { MenuContext } from '../../context/MenuContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const { cartItems, foodlist, removeFromCart, getTotalCartAmount } = useContext(MenuContext);

  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quentity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {foodlist.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>Rs.{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>Rs.{item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className='close'>x</p>
                </div>
                <hr />
              </div>
            )
          }
        })}
      </div>
      <div className='cart-bottem'>
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
          <p align="right"><button onClick={() => navigate('/order')} >PROCEED TO CHECKOUT</button></p>
        </div>
        <div className="cart-promocode">
          <div className="promocode">
            <p>if you have <span>Promo code</span>, Enter Here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder='Promo Code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart