"use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  let item = {
    name: name,
    quantity: quantity,
    category: category,
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.dir(event);
    console.log({ name, quantity, category });
    alert(`Name: ${item.name}, Quantity: ${item.quantity}, Category: ${item.category}`);
    setName("");
    setQuantity(1);
    setCategory("Produce");
  };

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

  return (
    <div className="mx-auto w-80">
      <div className="text-center bg-gray-500 w-80 rounded-2xl">
        <form onSubmit={handleSubmit}>
          <div className="p-2">
            <label className="text-white">Name: </label>
            <input
              type="text"
              onChange={handleNameChange}
              value={name}
              required
              className="text-gray-700 align-middle "></input>
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
        </form>
        <h1 className="inline-block mx-4 text-xl">{quantity}</h1>
        <button
          onClick={decrement}
          disabled={quantity <= 1}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block disabled:opacity-50">
          -
        </button>
        <button
          onClick={increment}
          disabled={quantity >= 20}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block m-2 disabled:opacity-50">
          +
        </button>
        <button
          onClick={handleSubmit}
          disabled={!name}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block m-2 disabled:opacity-50">
          Submit
        </button>
      </div>
    </div>
  );
}
