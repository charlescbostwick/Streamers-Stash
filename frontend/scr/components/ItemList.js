// src/components/ItemList.js
import React, { useState, useEffect } from 'react';
import { searchItems } from '../services/amazonAPI';

const ItemList = ({ items }) => {
  const [itemPrices, setItemPrices] = useState({});

  useEffect(() => {
    const fetchPrices = async () => {
      const prices = {};
      for (const item of items) {
        try {
          const results = await searchItems(item.name);
          if (results.length > 0) {
            prices[item.id] = results[0].price;
          } else {
            prices[item.id] = 'Not available';
          }
        } catch (error) {
          console.error('Error fetching price for item:', error);
          prices[item.id] = 'Error';
        }
      }
      setItemPrices(prices);
    };

    fetchPrices();
  }, [items]);

  return (
    <div>
      <h2>Items You Own</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - Price: {itemPrices[item.id]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
