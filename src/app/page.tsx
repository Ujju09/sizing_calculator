"use client";
import { useState } from "react";

export default function Home() {
  const [gender, setGender] = useState("");
  const [brand, setBrand] = useState("");
  const [fit, setFit] = useState("");
  const [size, setSize] = useState(0);
  const [showUnSize, setShowUnSize] = useState(false);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mt-8">
          Compare Brands, Get Your Un Size{" "}
          <span>
            <sup className="text-orange-500 text-xl">(BETA)</sup>
          </span>
        </h1>
        <p className="text-sm ">
          Currently works for men and women jeans (Straight Fit)
        </p>
      </div>
      <div className="flex  min-h-screen flex-col items-center p-4">
        <p className="py-3 text-xl mt-4"> Select your gender</p>
        <div className="py-3">
          <select
            name="gender"
            id="gender"
            className="
        bg-white p-2 rounded border border-gray-300 
       "
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="" defaultValue={""}>
              Select your gender
            </option>
            <option value="M">Men</option>
            <option value="W">Women</option>
          </select>
        </div>
        <p className="py-3 text-xl mt-4">
          {" "}
          Which brand jeans fits you the best?
        </p>
        <div className="py-3">
          <select
            name="brands"
            id="brands"
            className="
        bg-white p-2 rounded border border-gray-300 
       "
            onChange={(e) => setBrand(e.target.value)}
          >
            <option value="" defaultValue={""}>
              Select your brand
            </option>
            <option value="levis">Levis</option>
            <option value="levis">Lee</option>
            <option value="levis">Wrangler</option>
            <option value="levis">Gap</option>  
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
        <p className="py-3 text-xl mt-4"> What Fit Would You Like?</p>
        <div className="py-3">
        <select
            name="fit"
            id="fit"
            className="
        bg-white p-2 rounded border border-gray-300 
       "
       onChange={(e) => setFit(e.target.value)}
          >
            <option value="" defaultValue={""} >
              Select your fit
            </option>
            <option value="straight_men">Straight Fit (Men)</option>
            <option value="straight_women_hr">Straight Fit (Women) (High Rise)</option>
            <option value="straight_women_mr">Straight Fit (Women) (Mid Rise)</option>
           
          </select>
        </div>
        <div className="py-3">
          <button
            className="px-6 py-2 rounded border border-gray-300 bg-green-600"
            onClick={() => setShowUnSize(true)}
          >
            <p className="text-white">Get your Un Size</p>
          </button>
        </div>

        {/* Only show when we click on the Get your un-size button else show message  */}
        {showUnSize && (
          <div className="flex  min-h-screen flex-col items-center">
            <p className="text-2xl font-bold">
              Your Un Size is {getUnSize(gender,fit, size)}.{" "}
            </p>
            <br />
            <p className="text-m">
              This is an estimation based on the size chart of the brand. For
              more accurate results, please measure your waist.
            </p>
            <p className="text-xl py-2">Happy Shopping ✨</p>
          </div>
        )}
      </div>
    </main>
  );
}

function getUnSize(gender:string,fit:string, size: number) {
  let un_size = 0;
  if (gender == "M" && fit == "straight_men") {
    un_size = (size + 0.774) / 0.9872;
  }else if(gender == "M" && fit == "bootcut_men"){
    un_size = (size + 2.39)/0.99;

  }else if(gender=="W" && fit =="straight_women_hr"){
    un_size = (size - 4.0828)/0.7957;
  }else if(gender=="W" && fit =="straight_women_mr"){
    un_size = (size - 3.7933)/0.8322;
  }else if(gender=="W" && fit =="bootcut_women_mr"){
    un_size = (size - 4.7056)/0.7326;
  }else if(gender=="W" && fit =="bootcut_women_hr"){
    un_size = (size - 4.4137)/0.7468;
  }
  // ceil to the nearest integer
  return un_size.toFixed(0);
}
