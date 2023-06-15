import React from 'react';
import './openningours.css';
import Footer from '../component/footer';
import { sliderData } from '../component/Imagesliderdata';
import { useNavigate } from 'react-router-dom';
function Opnennigours() {
  const nv=useNavigate();
  return (
    <>
      <div className='op-cnt'>
        <div className='op'>
          <h1>Opennig Hours</h1>
        </div>
        <div className='rem'>
          <div className='links'>
            <span>
              <a href='#m'>Opennig Hours</a>
            </span>{' '}
            <span>|</span>{' '}
            <span>
              <a href='#h'>Get Here</a>
            </span>
          </div>
          <div className='page'>
<div className='imeg'>
<img src={sliderData[0].image} alt='logo' />
</div>
<div className='taxt'>
<h1 id='m'>Museum Opennig Hours</h1>
<p>Working hours </p>
<p>Saturday - Monday</p>
<p>From 09:00 AM To 05:00 PM</p>
<p className='last'>Last Ticket Admission at 4:00 PM</p>
<h1 id='h'>How We Get There</h1>
<h2 onClick={e=>{nv('/map')}}>Press Here</h2>
<p>26 july Street - Boulaq-Cairo</p>
<p>Postal Code:17611</p>
</div>

          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
export default Opnennigours;
