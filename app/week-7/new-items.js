"use client";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // Importing uuid for generating random IDs

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

  const handleNameChange = (e) => setName(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);

  const increment = () => {
    setQuantity((prevQuantity) => {
      if (prevQuantity < 20) {
        return prevQuantity + 1;
      }
      return prevQuantity;
    });
  };

  const decrement = () => {
    setQuantity((prevQuantity) => {
      if (prevQuantity > 1) {
        return prevQuantity - 1;
      }
      return prevQuantity;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const item = {
      id: uuidv4(), // Generate a random ID
      name,
      quantity,
      category,
    };

    onAddItem(item);

    setName("");
    setQuantity(1);
    setCategory("Produce");
  };

  return (
    <div className="mx-auto w-80">
      <div className="text-center bg-gray-500 w-80 rounded-2xl p-4">
        <form onSubmit={handleSubmit}>
          <div className="p-2">
            <label className="text-white">Name: </label>
            <input
              type="text"
              onChange={handleNameChange}
              value={name}
              required
              className="text-gray-700 align-middle"
            />
          </div>
          <div>
            <label className="text-white"> Category: </label>
            <select
              onChange={handleCategoryChange}
              value={category}
              className="text-gray-700 align-middle">
              <option value="Produce">Produce</option>
              <option value="Dairy">Dairy</option>
              <option value="Bakery">Bakery</option>
              <option value="Meat">Meat</option>
              <option value="Frozen Foods">Frozen Foods</option>
              <option value="Canned Goods">Canned Goods</option>
              <option value="Dry Goods">Dry Goods</option>
              <option value="Beverages">Beverages</option>
              <option value="Snacks">Snacks</option>
              <option value="Household">Household</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="p-2">
            <h1 className="inline-block mx-4 text-xl">{quantity}</h1>
            <button
              type="button"
              onClick={decrement}
              disabled={quantity <= 1}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block disabled:opacity-50">
              -
            </button>
            <button
              type="button"
              onClick={increment}
              disabled={quantity >= 20}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block m-2 disabled:opacity-50">
              +
            </button>
          </div>
          <button
            type="submit"
            disabled={!name}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block m-2 disabled:opacity-50">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
