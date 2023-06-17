import React from 'react';
import { AiFillClockCircle } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';
import { BsFillTicketFill } from 'react-icons/bs';
import './calender.css';
import { useNavigate } from 'react-router-dom';
function Calender() {
  const nv=useNavigate();
  function goto(){
    nv('/openning-ours')
  }
  return (
    <>
      <div className='pr2'>
        <div className='ct'>
          <div className='cart'>
            <p >Museum Guide</p>
            <h2 onClick={data=>{nv('/guide')}} >Visit</h2>
          </div>
          <div className='cart'>
            <div className='cart2'>
              <AiFillClockCircle className='ic' onClick={goto} />
              <h2>Opening Hours</h2>
              <p>9:00 AM - 5:00 PM</p>
            </div>
          </div>
          <div className='cart'>
            <CiLocationOn className='ic' onClick={d=>{nv('/map')}} />
            <h2>Address</h2>
            <p>Ehawamdia Main Street</p>
          </div>
          <div className='cart'>
            <BsFillTicketFill className='ic' onClick={d=>{nv('/ticket')}} />
            <h2>Get Ticket</h2>
            <p>Buy Ticket</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Calender;
