import React from 'react';
import Navbar from './Navbar';
import '../styles/Layaut.css';
import Banner from '../Assets/Banner.png';

function Layaut(props){
    return (
      <React.Fragment>
        <Navbar/>
        <div className="hero">
          <img src={ Banner } alt="Banner"/>
        </div>
      </React.Fragment>
    );
}

export default Layaut;