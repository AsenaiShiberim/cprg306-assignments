
import ItemList from "./item-list";

export default function Page() {
  return (
    <div className="bg-gradient-to-b from-black to-blue-800 min-h-screen">
      <main className="m-6 text-white p-3">
        <h1 className="text-2xl font-bold">Shopping List</h1>
        <div className="my-2 ml-2">
          <ItemList />
        </div>
      </main>
    </div>
  );
}

