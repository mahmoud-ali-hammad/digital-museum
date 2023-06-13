import React from 'react';
import './video.css';
import svideo from './image/1.mp4';
import { useNavigate } from 'react-router-dom';
function Rvideo() {
  const nav=useNavigate()
  return (
    <>
      <div className='main'>
        <video autoPlay loop muted>
          <source src={svideo} autoPlay loop muted />
        </video>
        <div className='vtext'>
          <h2>The Royal Carrige Museum</h2>
          <p>Expolre The Museum</p>
          <button onClick={()=>nav('/ticket')}>Get Ticket</button>
        </div>
      </div>
    </>
  );
}
export default Rvideo;
