import React, { useState, useEffect } from 'react';
import './List.css';
import { toast } from 'react-toastify';
import axios from 'axios';
import UpdateModal from './UpdateModal'; // Import the UpdateModal component

const List = ({ url }) => {
  const [list, setList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error("Error");
      }
    } catch (error) {
      toast.error("Error fetching the list");
    }
  };

  const removeFood = async (foodId) => {
    try {
      const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
      await fetchList();
      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error("Error");
      }
    } catch (error) {
      toast.error("Error removing the item");
    }
  };

  const updateFood = async (foodId, data) => {
    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('category', data.category);
      formData.append('price', data.price);
      
      // Append image only if it exists
      if (data.image) {
        formData.append('image', data.image);
      }
  
      // Change to PUT request
      const response = await axios.put(`${url}/api/food/update/${foodId}`, formData);
      
      if (response.data.success) {
        toast.success(response.data.message);
        fetchList(); // Refresh the list after update
      } else {
        toast.error("Error updating the item");
      }
    } catch (error) {
      toast.error("Error updating the item");
    }
  };
  

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => (
            <tr key={index}>
              <td><img src={`${url}/images/${item.image}`} alt={item.name} /></td>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>Rs.{item.price}</td>
              <td>
                <span className="btn-update" onClick={() => { setCurrentItem(item); setIsModalOpen(true); }}>Update</span>
                <span className="btn-remove" onClick={() => removeFood(item._id)}> Remove </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <UpdateModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        item={currentItem} 
        onUpdate={updateFood} 
      />
    </div>
  );
};

export default List;