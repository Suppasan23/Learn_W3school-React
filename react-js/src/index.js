import React from 'react';
import ReactDOM from 'react-dom/client';


const cars = 
[
  {id: 1, brand: 'Ford'},
  {id: 2, brand: 'BMW'},
  {id: 3, brand: 'Audi'}
];


const root = ReactDOM.createRoot(document.getElementById('root1'));
root.render(<Garage cars={cars}/>);


function Garage(props)
{

  return(
    <div>
      <h1>Who live in my Garage?</h1>
      <ul>
          {props.cars.map((car) => <Car key={car.id} brand={car.brand} carId={car.id}/>)}
      </ul>
    </div>
  )

}


function Car(props)
{
  return <li> I am a car with id {props.carId} and brand {props.brand} </li>;
}