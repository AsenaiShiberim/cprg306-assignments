"use client";
import Item from "./item";
import Items from "./items.json";
import { useState } from "react";

export default function ItemList(){
  const [sortBy, setSortBy] = useState("name");
  
  if (sortBy === "name"){
    Items.sort((a,b) => a.name.localeCompare(b.name));
  }
  else if (sortBy === "category"){
    Items.sort((a,b) => a.category.localeCompare(b.category));
  }


  
return(
  <div>
    <label> Sort by:</label>
      <button onClick={() => setSortBy("name")}  className="bg-yellow-700 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded m-2 w-24">Name</button>
      <button onClick={() => setSortBy("category")} className="bg-blue-700 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded m-2 w-24">Category</button>
      
      <div >
        {Items.map((item, index) => {
          return <Item key={index} name={item.name} quantity={item.quantity} category={item.category} />
        })}
  </div>
  </div>
)
  
   


}
