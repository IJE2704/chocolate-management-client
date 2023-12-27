import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Components/Main.jsx";
import AddChocolate from "./Components/AddChocolate.jsx";
import AllChocolate from "./Components/AllChocolate.jsx";
import EditChocolate from "./Components/EditChocolate.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<AllChocolate></AllChocolate>,
        loader: ()=> fetch('http://localhost:5000/chocolate')
      },
      {
        path:'/addChocolate',
        element:<AddChocolate></AddChocolate>
      },{
        path:'/edit/:id',
        element:<EditChocolate></EditChocolate>,
        loader:({params})=>fetch(`http://localhost:5000/chocolate/${params.id}`)
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
