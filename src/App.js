import React  from 'react';
import Dinner from './dinner.js';
import './App.css';

function App() {
  return (
    <div>
    <h1>Hello World from sajid</h1>
    {/* <Dinner></Dinner> */}
    <hr/>
    <Dinner dishName="Nihaari" sweetDish="Kheer" />

    <hr/>

    <Dinner dishName="Biryani" sweetDish="Jaleebi" />
    
    <hr/>
    
    <Dinner dishName="Karahi" sweetDish="Gajar ka Halwa" />
    <hr/>
    </div>

    
  );
}

export default App;
