import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Chocolate from "./Chocolate";

const AllChocolate = () => {
 const allChocolate = useLoaderData();
 console.log(allChocolate);
 const [chocolates,setChocolates] = useState(allChocolate);
 console.log(chocolates);
  return (
    <div className="p-[114px]">
      <div className="flex ">
        <Link to="/addChocolate">
          <button className="w-[256px] h-[64px] rounded border border-[rgba(20, 20, 20, 0.15)] text-[20px]">
            <span>+ </span>New Chocolate
          </button>
        </Link>
      </div>
      <div>
        <div className="flex justify-around items-center background-all-chocolate-bar h-[64px] mt-[32px]">
          <span>Image</span>
          <span>Name</span>
          <span>Country/Factory</span>
          <span>Categorie</span>
          <span>Action</span>
        </div>
        <div>
          {
            chocolates.map(chocolate => <Chocolate
            key={chocolate._id}
            chocolate={chocolate}
            chocolates = {chocolates}
            setChocolates = {setChocolates}
            ></Chocolate>)
          }
        </div>
      </div>
    </div>
  );
};

export default AllChocolate;
