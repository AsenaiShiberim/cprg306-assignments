export default function Item({name,quantity,category}){
    return(
        <main className="border border-gray-800 p-2 max-w-md bg-transparent shadow-md mb-4">
            <p className="text-white font-bold">{name}</p>
            {quantity && (
             <h1>
                 Buy {quantity} in {category}
             </h1>
      
            )} 
        </main>
    );
 
   
 
 }