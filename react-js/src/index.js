import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root1'));
root.render(<MyForm/>);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function MyForm() 
{

  const [mySubmit, setMySubmit] = useState(false);
  const [myInput, setMyInput] = useState("");
  

  const handleSubmit = function(event)
  {
    event.preventDefault();
    setMySubmit(true);
  }


  const handleChange = function(event)
  {
    setMyInput(event.target.value);
    setMySubmit(false);
  }

  return(
    <div>

      <form onSubmit={handleSubmit}>

        <input type="input" onChange={handleChange}/>

        <button type="submit">Submit</button>

      </form>

      
        <ShowValue itemInput={myInput} itemSubmit={mySubmit}/>

    </div>
  )



}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function ShowValue(props)
{
  const itemSubmit = props.itemSubmit;
  const itemInput = props.itemInput;

  if(itemSubmit&&itemInput)
  {
    return  (
              <p>{itemInput}</p>
            )  
  }
  else
  {
    return  (
              <p></p>
            )
  }
}




