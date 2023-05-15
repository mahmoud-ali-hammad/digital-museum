import React from 'react';
import './footer.css';
import { FiFacebook, FiTwitter } from 'react-icons/fi';
import { AiFillInstagram } from 'react-icons/ai';
function Footer() {
  return (
    <>
      <div className='cfooter'>
        <img src={require('./image/2.png')} alt='logo' />
        <h2>Feel Free To drop Us A Line</h2>
        <div>
          <AiFillInstagram className='icons' />
          <FiFacebook className='icons' />
          <FiTwitter className='icons' />
        </div>
      </div>
    </>
  );
}
export default Footer;
