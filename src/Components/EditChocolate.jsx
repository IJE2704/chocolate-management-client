import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const EditChocolate = () => {
  const chocolate = useLoaderData();
  const { _id, name, country, category, image } = chocolate;
  console.log(chocolate);
  const handleEditChocolate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const country = form.country.value;
    const category = form.category.value;
    const image = form.image.value;
    const updateChocolate = {name,country,category,image};
    console.log(updateChocolate);

    fetch(`http://localhost:5000/chocolate/${_id}`,{
      method:'PUT',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(updateChocolate)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
    })
  };
  return (
    <div>
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
              Update Chocolate
            </h2>
            <p className="text-center mb-[48px]">
              Use the below form to update a product
            </p>
            <form onSubmit={handleEditChocolate}>
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
                  defaultValue={name}
                  placeholder={name}
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
                  defaultValue={country}
                  placeholder={country}
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
                  defaultValue={category}
                  placeholder={category}
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
                  defaultValue={image}
                  placeholder={image}
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
    </div>
  );
};

export default EditChocolate;
