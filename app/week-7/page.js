"use client";
import ItemList from "./item-list";
import NewItem from "./new-items";
import itemsData from "./items.json";
import { useState } from "react";

export default function Main() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main>
      <h1 className="text-2xl ml-2 mt-2 font-bold text-center">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}
