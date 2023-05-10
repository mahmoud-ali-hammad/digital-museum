import React from 'react';
import './onenav.css';
import { Link } from 'react-router-dom';
import {
  AiFillClockCircle,
  AiFillInstagram,
  AiOutlineSearch,
} from 'react-icons/ai';
import { BiDirections } from 'react-icons/bi';
import { FiFacebook, FiTwitter } from 'react-icons/fi';
function Onenav() {
  return (
    <>
      <div className='parent'>
        <div className='container'>
          <div className='one'>
            <div className='times'>
              <AiFillClockCircle className='icon' />
              <p className='openText'>
             <Link to={'/openning-ours'} >  Plan Your Visit Today: 09 <span>---</span> 07</Link> {' '}
              </p>
            </div>
            <div className='dir'>
              <BiDirections className='icon' />
              <p className='dir1'>
                {' '}
                <Link to={'/openning-ours'} >Get Direction</Link>
              </p>
            </div>
          </div>
          <div className='two'>
            <AiFillInstagram className='icons' />
            <FiFacebook className='icons' />
            <FiTwitter className='icons' />
            <AiOutlineSearch className='icons' />
            <button className='btn'>Ticket</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Onenav;
