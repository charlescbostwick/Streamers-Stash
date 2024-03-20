import React, { useState, useEffect } from 'react';
import { fetchItems, deleteItem } from '../services/api';

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchAllItems = async () => {
      try {
        const allItems = await fetchItems();
        setItems(allItems);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchAllItems();
  }, []);

  const handleDelete = async (itemId) => {
    try {
      await deleteItem(itemId);
      setItems(items.filter(item => item.id !== itemId));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div>
      <h2>Items</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - {item.description} - ${item.price}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
