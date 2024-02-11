import ItemList from "./item-list";

export default function Page() {
  return (
    <div className="bg-gradient-to-b from-black to-blue-600 min-h-screen">
      <main className="ml-4 text-white p-3">
        <h1 className="text-3xl font-bold mt-2">Shopping List</h1>
        <div className="my-2 ml-2 mt-8">
          <ItemList />
        </div>
      </main>
    </div>
  );
}

