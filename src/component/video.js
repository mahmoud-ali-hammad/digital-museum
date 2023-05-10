import React from 'react';
import './video.css';
import svideo from './image/awesome-video.mp4';
function Rvideo() {
  return (
    <>
      <div className='main'>
        <video autoPlay loop muted>
          <source src={svideo} autoPlay loop muted />
        </video>
        <div className='vtext'>
          <h2>The Royal Carrige Museum</h2>
          <p>Expolre The Museum</p>
          <button>Get Ticket</button>
        </div>
      </div>
    </>
  );
}
export default Rvideo;
