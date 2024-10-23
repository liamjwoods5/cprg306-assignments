"use client";
import React, { useState } from "react";
import Item from "./item";
import items from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      <div className="flex justify-center">
        <button
          onClick={() => setSortBy("name")}
          className="text-white bg-blue-500 hover:bg-blue-400 p-1 rounded m-2">
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className="bg-blue-500 hover:bg-blue-400 p-1 rounded m-2">
          Sort by Category
        </button>
      </div>
      <div className="flex justify-center">
        <ul className="mt-5 max-w-md">
          {sortedItems.map((item, index) => (
            <li key={index}>
              <Item
                {...item}
                className="bg-gray-900 m-5 p-2"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
