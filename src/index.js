import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Name from './Components/myName';
import JSExpression from './Components/jsExpression';
import MediaCard from './Components/MediaCard';
import Gate from './Components/Gate';

ReactDOM.render(
  <div className="assignment">
    <h2>PIAIC Bootcamp2020 Assignment - Class 3</h2>

    <h4>1. Hello "Name" Task</h4>
    <Name firstName="Muhammad" lastName="Ashraf" />
        
    <h4>2. JS Expression Task</h4>
    <JSExpression age = {45} />

    <h4>3. Media Card Task</h4>
    <MediaCard title="This is Media card title." mcbody="Media card's body." imageUrl="https://www.theindianwire.com/wp-content/uploads/2018/05/google-photos-1-990x556.jpg" />

    <h4>4. Gate Task</h4>
    <Gate isOpen={true} />
  </div> ,
  document.getElementById('root')
  
);

