import React from 'react';
import { sliderData } from './Imagesliderdata';
import './ecart.css';
function Ecart(props) {
  return (
    <>
      <div className='box'>
        <div className='image'>
          <img src={sliderData[0].image} alt='' />
          <p>hello world</p>
        </div>
      </div>
    </>
  );
}
export default Ecart;
