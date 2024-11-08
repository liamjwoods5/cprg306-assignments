// item.js
import React from "react";

function Item({ name, quantity, category, className }) {
  return (
    <div className={`p-4 border-b border-gray-200 ${className}`}>
      <div className="text-lg font-semibold">{name}</div>
      <div className="text-sm text-gray-600">Quantity: {quantity}</div>
      <div className="text-sm text-gray-600">Category: {category}</div>
    </div>
  );
}

export default Item;
