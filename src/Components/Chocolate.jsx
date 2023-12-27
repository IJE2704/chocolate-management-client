import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Chocolate = ({ chocolate, chocolates, setChocolates }) => {
  const { _id, name, country, category, image } = chocolate;
  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(`http://localhost:5000/chocolate/${id}`);
        fetch(`http://localhost:5000/chocolate/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remaining = chocolates.filter(item => item._id !==id);
              setChocolates(remaining);
              Swal.fire({
                title: "Deleted!",
                text: "Your chocolate has been deleted.",
                icon: "success"
              });
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="flex justify-around items-center mt-[32px]">
        <div className="w-[70px] h-[70px]">
          <img src={image} alt="" />
        </div>
        <p className="w-[150px] text-center">{name}</p>
        <p className="w-[150px] text-center">{country}</p>
        <p className="w-[150px] text-center">{category}</p>
        <div className=" flex gap-2 justify-center items-center w-[150px]">
          <div className="w-[48px] h-[48px] chocolate-action-btn flex justify-center items-center">
            <Link to={`edit/${_id}`}><img src="https://i.ibb.co/SnD3gmY/edit-2-1.png" alt="" /></Link>
          </div>
          <div
            onClick={() => handleDelete(_id)}
            className="w-[48px] h-[48px] chocolate-action-btn flex justify-center items-center"
          >
            <img src="https://i.ibb.co/1qdHPfV/Frame.png" alt="" />
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] chocolate-border-bg mt-[32px]"></div>
    </div>
  );
};

export default Chocolate;
