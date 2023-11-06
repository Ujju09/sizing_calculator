"use client";
import { useState } from "react";

export default function Home() {
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState(0);
  const [showUnSize, setShowUnSize] = useState(false);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mt-8">
          Compare Brands, Get Your Un Size
        </h1>
        <p className="text-sm ">
          Currently works for men jeans only. More brands coming soon.
        </p>
      </div>
      <div className="flex  min-h-screen flex-col items-center p-4">
        <p className="py-3 text-xl mt-4"> Which brand jeans fits you the best?</p>
        <div className="py-3">
          <select
            name="brands"
            id="brands"
            className="
        bg-white p-2 rounded border border-gray-300 
       "
       onChange={(e) => setBrand(e.target.value)}
          >
            <option value="" defaultValue={""} >
              Select your brand
            </option>
            <option value="levis">Levis</option>
          </select>
        </div>
        <p className="py-3 text-xl mt-4"> What size do you wear?</p>
        <div className="py-3">
          <input
            type="number"
            onChange={(e) => setSize(parseFloat(e.target.value))}
            className="px-6 py-3 rounded border border-gray-300"
            min={22}
            max={60}
            placeholder="32"
          />
        </div>
        <div className="py-3">
          <button className="px-6 py-2 rounded border border-gray-300 bg-green-600"
          onClick={() => setShowUnSize(true)}
          >
            <p className="text-white">Get your Un Size</p>
          </button>
        </div>

        {/* Only show when we click on the Get your un-size button else show message  */}
        {showUnSize && (
          <div className="flex  min-h-screen flex-col items-center">
            <p className="text-2xl font-bold">
              Your Un Size is {getUnSize(brand, size)}.{" "} 
            </p>
            <br />
            <p className="text-m">
              This is an estimation based on the size chart of the brand.{" "}For more accurate results, please measure your waist.
            </p>
            <p className="text-xl py-2">
              Happy Shopping ✨
            </p>

          </div>
        ) 
        
        }
      </div>
    </main>
  );
}


function getUnSize(brand:string, size:number) {
  let un_size = 0;
  if (brand=='levis') {
    un_size = (size+0.7740)/0.9872; 
  }
  // ceil to the nearest integer
  return un_size.toFixed(0);
}