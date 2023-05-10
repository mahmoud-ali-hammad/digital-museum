import React, { useEffect, useState } from 'react';
import { Link, NavLink, useAsyncError } from 'react-router-dom';
import './twonav.css';
import classes from './tow.module.css';
import { RxDropdownMenu } from 'react-icons/rx';
import 'react-dropdown/style.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useNavigate } from 'react-router-dom';
function Twonav() {
  const navigate = useNavigate();
  const [halls,setHalls]=useState([])
  const [loading,setLoading]=useState(false)
  useEffect(()=>{
    const fetchData = async () => {
    try {
      const response = await fetch("https://digital-museum-production.up.railway.app/arts/halls/"
    );
      const data = await response.json();
      setHalls(data.results);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
    fetchData();
  },[])
  // const halls=['One','Two','Three'];
  return (
    <>
      {loading ? (<h2>loading....</h2>):
      <div div className='pr1'>
        <div className='cnt'>
          <div className='ch1'>
            <div className='logo1'>
              <img src={require('./image/2.png')} alt='logo' />
              <p className='blew'>egyptian</p>
            </div>
            <p>Royal carriage</p>
          </div>

          <div className='ch2'>
            <ul>
              <li>
                <NavLink
                  to={'/'}
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                  end
                >
                  Home
                </NavLink>
              </li>
              <li className='me'>
                <a>Halls</a>
                <ul className='drop-down'>
                {halls.map((m,index)=>{
                  return <li onClick={()=>{ navigate(`/halls/${m.name}`);}}
                  ><a>{m.name}</a></li>
                },)}
                </ul>
              </li>
              <li>
                <a href='#A'>About</a>
              </li>
            </ul>
          </div>
        </div>
      </div>}
    </>
  );
}
export default Twonav;
