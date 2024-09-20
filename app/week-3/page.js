import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="bg-gray-800">
      <h1 className="text-3xl pt-3 pl-3 font-bold">Shopping List</h1>
      <ItemList />
    </main>
  );
}
