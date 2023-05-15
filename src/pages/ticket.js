import React from 'react';
import { useRef, useState } from 'react';

import dateFormat from 'dateformat';
// import DatePicker from "react-datepicker";
// import 'react-datepicker/dist/react-datepicker.css'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { sliderData } from '../component/Imagesliderdata';
// Import Swiper styles

import 'swiper/css';
import './ticket.css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper';
function Reserve() {
  const ob1 = [
    {
      name: 'Visitor - Egyptian',
      name2: 'Student - Egyptian',
      price: 60,
      price2: 120,
    },
    {
      name: 'Visitor - Other Nationality',
      price: 120,
      name2: 'Student - Other Nationality',
      price2: '300',
    },
  ];
  const [value, setvalue] = useState(null);
  const [openwindow, setopenwindow] = useState(1);
  const [sub, setsub] = useState(0);
  const [sub2, setsub2] = useState(0);
  const [objectx, setobectx] = useState(0);
  const [qua, setqua] = useState(0);
  const [qua2, setqua2] = useState(0);
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Swiper navigation={true} modules={[Navigation]} className='mySwiper'>
          {sliderData.map((m, index) => {
            return (
              <SwiperSlide>{<img src={m.image} alt='slide' />}</SwiperSlide>
            );
          })}
        </Swiper>
        <div className='main-content'>
          <h2 className='ad'>Book Your ticket</h2>
          <h4>Tickets</h4>
          <label for='start'>Enter The Date of Visit:</label>
          <DatePicker
            label='Choose Date'
            value={value}
            onChange={newValue => setvalue(dateFormat(newValue, 'yyyy-mm-dd'))}
            disablePast
            inputFormat='MM-DD-YYYY'
          />
          <hr className='df'></hr>
          {/* <DatePicker  onChange={date=>setvalue(date)} minDate={new Date()} selected={value} dateFormat='yyyy/MM/dd'/> */}
          <h1>Nationality:</h1>
          <button
            onClick={() => {
              setopenwindow(1);
              setobectx(0);
              setqua(0);
              setqua2(0)
              setsub(0)
              setsub2(0)
            }}
            className={openwindow === 1 && 'selected'}
            style={{ borderRight: openwindow === 2 && 'none' }}
          >
            Egyptian
          </button>
          <button
            onClick={() => {
              setopenwindow(2);
              setobectx(1);
              setqua(0);
              setqua2(0)
              setsub(0)
              setsub2(0)
            }}
            className={openwindow === 2 && 'selected'}
            style={{ borderLeft: openwindow === 1 && 'none' }}
          >
            Other Nationalities
          </button>
          <div className='reserv'>
            <h2>Choose your ticket:</h2>
            <table>
              <thead>
                <td>type</td>
                <td>Quatinty</td>
                <td>price</td>
                <td>subtotal</td>
              </thead>
              <tbody>
                <tr>
                  <td>{ob1[objectx].name}</td>
                  <td>
                    {' '}
                    <input min={0}
                      type='number'
                      step={1}
                      value={qua}
                      onChange={e => {
                        setsub(e.target.value * ob1[objectx].price);
                        setqua(e.target.value)
                      
                      }}
                    />
                  </td>
                  <td>{ob1[objectx].price}</td>
                  <td>{sub}</td>
                </tr>
                <tr>
                  <td>{ob1[objectx].name2}</td>
                  <td>
                    <input min={0}
                      type='number'
                      step={1}
                      value={qua2}
                      onChange={e => {
                        setsub2(e.target.value * ob1[objectx].price2);
                        setqua2(e.target.value)
                      }}
                    />
                  </td>
                  <td>{ob1[objectx].price2}</td>
                  <td>{sub2}</td>
                </tr>
              </tbody>
            </table>
            <h2>Total: {sub+sub2}</h2>
          </div>
        </div>
      </LocalizationProvider>
    </>
  );
}
export default Reserve;
