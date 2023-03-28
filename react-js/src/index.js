import { useState } from "react";
import ReactDOM from "react-dom/client";
import Car from "./Car";




const ShowMe = function()
{
  return (
    <>
      <Car />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ShowMe />);