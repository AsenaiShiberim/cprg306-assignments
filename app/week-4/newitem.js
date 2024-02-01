"use client";
import { useState } from "react";

export default function NewItem(){
    const [name,setName] = useState("");
    const [quantity,setQuantity] = useState(1);
    const [category,setCategory] = useState("Produce");


   const handleSubmit = (event) => {
       event.preventDefault();
       console.log("name: ",name);
       console.log("quantity: ",quantity);
       console.log("category: ",category);


    alert(`Item name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);
    setName("");
    setQuantity(1);
    setCategory("Produce");
    }


return(
    <div className="flex justify-center w-full text-center">
        <h1>Item name</h1>
        <form onSubmit={handleSubmit} className="p-2 m-4 bg-slate-900 text-black max-w-sm w-full">
        <label className="text-black p-6">
            
            <input type="text"
            value={name} 
            placeholder="Enter item name"
            className="mt-1 border-2 border-gray-300 p-2 rounded-1g"
            onChange={event => setName(event.target.value)} />
        </label >
        <label className="block text-sm font-medium text-gray-700 p-6"> 
            <input type="number" 
            value={quantity} 
            className="text-black border rounded"
            onChange={event => setQuantity(event.target.value)} />
        </label>
        <label className="text-black border rounded">
            
            <select value={category} onChange={event => setCategory(event.target.value)} >
                <option value="Produce">Produce</option>
                <option value="Dairy">Dairy</option>
                <option value="Bakery">Bakery</option>
                <option value="Meat">Meat</option>
                <option value="Pantry">Frozen</option>
                <option value="Frozen">Dry Goods</option>
                <option value="Beverages">Beverages</option>
                <option value="Snacks">Snacks</option>
                <option value="Canned">Canned</option>
                <option value="Alcohol">Alcohol</option>
                <option value="Other">Other</option>

            </select>   
        </label>
        <button type="submit" className="w-full mt-4 py-2 bg-blue-500 text-white font-semibold
        rounded-1g shadow-md hover:bg-blue-700 focus:outline-none focus:ring-blue-700 ">Submit</button>
        </form>
    </div>
)
}                                                                                                                                                        