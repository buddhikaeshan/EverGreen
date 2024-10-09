import React, { useState, useEffect } from 'react';
import './Orders.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { assets } from '../../assets/assets';

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(url + '/api/order/list');
      if (response.data.success) {
        // Set orders and reverse the list to show the latest orders at the top
        setOrders(response.data.data.reverse());
      } else {
        toast.error('Error fetching orders');
      }
    } catch (error) {
      toast.error('An error occurred');
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(url + '/api/order/status', {
        orderId,
        status: event.target.value,
      });
      if (response.data.success) {
        await fetchAllOrders();
      } else {
        toast.error('Failed to update status');
      }
    } catch (error) {
      toast.error('An error occurred while updating status');
    }
  };

  useEffect(() => {
    // Fetch orders when component mounts
    fetchAllOrders();

    // Set up an interval to poll the server for updates every 10 seconds
    const intervalId = setInterval(fetchAllOrders, 10000); // 10000ms = 10 seconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="order-container">
      <h3>Order Page</h3>
      <table className="order-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Items</th>
            <th>Total Items</th>
            <th>Amount</th>
            <th>Customer Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={order._id}>
              <td>{index + 1}</td>
              <td>
                {order.item
                  .map(
                    (item, idx) =>
                      `${item.name} x${item.quantity}${
                        idx < order.item.length - 1 ? ', ' : ''
                      }`
                  )
                  .join('')}
              </td>
              <td>{order.item.length}</td>
              <td>Rs {order.amount}</td>
              <td>
                {order.address.firstName} {order.address.lastName}
              </td>
              <td>{order.address.city}, {order.address.address}</td>
              <td>{order.address.phone}</td>
              <td>
                <select
                  onChange={(event) => statusHandler(event, order._id)}
                  value={order.status}
                >
                  <option value="Food Processing">Food Processing</option>
                  <option value="Out for delivery">Out for Delivery</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;