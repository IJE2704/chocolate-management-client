import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddChocolate = () => {
  const handleAddChocolate = event =>{
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const country = form.country.value;
    const category = form.category.value;
    const image = form.image.value;
// make a object with all data
    const newChoclate = {name,country,category,image};

    // data send to server
    fetch('http://localhost:5000/chocolate',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(newChoclate)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      if(data.insertedId){
        Swal.fire({
          title: 'Success!',
          text: 'Successfully data inserted',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }
    })
    form.reset();
  }
  return (
    <div className="p-[114px]">
      <div className="flex mb-5">
        <Link to="/">
          <button className="w-[256px] h-[64px] rounded border border-[rgba(20, 20, 20, 0.15)] text-[20px]">
            <span> </span>All Chocolate
          </button>
        </Link>
      </div>
      <div className=" flex items-center justify-center ">
        <div className="bg-add-chocolate-form p-8 rounded shadow-md w-full px-[113px]">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            New Chocolate
          </h2>
          <p className="text-center mb-[48px]">
            Use the below form to create a new product
          </p>
          <form onSubmit={handleAddChocolate}>
            <div className="mb-4 ">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Swiss Milk Chocolate"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-600"
              >
                Country
              </label>
              <input
                type="country"
                id="country"
                name="country"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Bangladesh"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-600"
              >
                Category
              </label>
              <input
                id="category"
                name="category"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Your category..."
              ></input>
            </div>

            <div className="mb-6">
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-600"
              >
                Image url
              </label>
              <input
                id="image"
                name="image"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Image url"
              ></input>
            </div>

            <div className="flex items-center justify-end">
              <button
                type="submit"
                className="add-choclate-btn w-full text-white py-[17px] font-semibold"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddChocolate;
