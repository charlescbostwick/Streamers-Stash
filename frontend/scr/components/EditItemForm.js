import React, { useState } from 'react';
import { updateItem } from '../services/api';

const EditItemForm = ({ item, onUpdateItem }) => {
  const [name, setName] = useState(item.name);
  const [description, setDescription] = useState(item.description);
  const [price, setPrice] = useState(item.price);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedItem = await updateItem(item.id, { name, description, price });
      onUpdateItem(updatedItem);
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditItemForm;
