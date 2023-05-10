import React from 'react';
import Onenav from '../component/onenav';
import { Outlet } from 'react-router-dom';
import Twonav from '../component/twonav';
function Wrapper() {
  return (
    <>
      <Onenav />
      <Twonav />
      <Outlet />
    </>
  );
}
export default Wrapper;
