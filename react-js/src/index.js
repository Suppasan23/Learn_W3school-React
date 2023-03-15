import React from 'react';
import ReactDOM from 'react-dom/client';
import { name,age } from './person';


function Message()
{
  return name + ' is ' + age + ' years old.';
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Message />);

