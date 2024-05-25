import React from 'react'
import './Orders.css'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import { assets } from '../../assets/assets'

const Orders = ({ url }) => {

  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    const response = await axios.get(url + "/api/order/list");
    if (response.data.success) {
      setOrders(response.data.data)
      console.log(response.data.data);
    } else {
      toast.error("Error")
    }
  }

  const statusHandler=async(event,orderId)=>{
    const response =await axios.post(url+"/api/order/status",{
      orderId,
      status:event.target.value
    }) 
    if (response.data.success) {
      await fetchAllOrders();
    } else {
      
    }
  }

  useEffect(() => {
    fetchAllOrders();
  }, [])

  return (
    <div>
      <div className="order add">
        <h3>Order Page</h3>
        <div className="order-list">
          {orders.map((order, index) => (
            <div key={index} className="order-item">
              <img src={assets.parcel_icon} alt="" />

              <p className="order-item-food">
                {order.item.map((item, index) => {
                  if (index === order.item.length - 1) {
                    return item.name + "X" + item.quantity
                  } else {
                    return item.name + "X" + item.quantity + ", "
                  }
                })}
              </p>

              <p>items: {order.item.length}</p>
              <p>Rs{order.amount}</p>
              <div className='order-item-address'>
                <p className="order-item-name">{order.address.firstName + " " + order.address.lastName}</p>
                <p>{order.address.city + ", address:" + order.address.address}</p>
                <p className='order-item-phone'>{order.address.phone}</p>
              </div>
              <select onChange={(event)=>statusHandler(event,order._id)} value={order.status}>
                <option value="Food Processing">Food Processing</option>
                <option value="Out for delivery">Out for Delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Orders