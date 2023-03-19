import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';


const cars = 
[
  {id: 1, brand: 'Ford'},
  {id: 2, brand: 'BMW'},
  {id: 3, brand: 'Audi'}
];


const root = ReactDOM.createRoot(document.getElementById('root1'));
root.render(<Garage cars={cars}/>);