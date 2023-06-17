import React from 'react';
import { useRef, useState, useEffect } from 'react';

import dateFormat from 'dateformat';
// import DatePicker from "react-datepicker";
// import 'react-datepicker/dist/react-datepicker.css'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { sliderData } from '../component/Imagesliderdata';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Initialize react-toastify

// Import Swiper styles

import 'swiper/css';
import './ticket.css';
import 'swiper/css/navigation';

// import required modules
import { Controller, Navigation } from 'swiper';
function Reserve() {
  const [loading, setLoading] = useState(false);
  const [tickets, setTickets] = useState([]);
  const [personal, setPersonal] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://dmuseum.fly.dev/reservation/ticket/`
        );
        const data = await response.json();
        setTickets(
          data.map(info => {
            return {
              id: info.id,
              type: info.ticket_type,
              price: info.price,
              quantity: 0,
              subtotal: 0,
            };
          })
        );

        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // console.log(tickets);
  const [value, setvalue] = useState(null);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let tempTotal = 0;
    for (let i = 0; i < tickets.length; i++) {
      tempTotal += tickets[i].subtotal;
    }
    setTotal(tempTotal);
  }, [tickets]);

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

          <div className='personal'>
            <h4>personal information</h4>
            <div className='personlinfo'>
              <label htmlFor='FName'>Enter Your first Name</label>
              <input
                type='text'
                required
                id='FName'
                onChange={e => {
                  let fName = personal;
                  fName.firstName = e.target.value;
                  setPersonal(fName);
                }}
              />
              <label htmlFor='LName'>Enter Your Last Name</label>
              <input
                type='text'
                required
                id='LName'
                onChange={e => {
                  let lName = personal;
                  lName.lastName = e.target.value;
                  setPersonal(lName);
                }}
              />
              <label htmlFor='email'>Enter Your Email</label>
              <input
                type='email'
                required
                id='email'
                onChange={e => {
                  let email = personal;
                  email.email = e.target.value;
                  setPersonal(email);
                }}
              />
              <label htmlFor='Phone'>Enter Your phone</label>
              <input
                type='tel'
                required
                id='Phone'
                onChange={e => {
                  let numb = personal;
                  numb.number = e.target.value;
                  setPersonal(numb);
                }}
              />
              {/* {console.log(personal)} */}
            </div>
          </div>
          <hr className='df'></hr>

          <label for='start'>Enter The Date of Visit:</label>
          <DatePicker
            label='Choose Date'
            value={value}
            onChange={newValue => setvalue(dateFormat(newValue, 'yyyy-mm-dd'))}
            disablePast
            inputFormat='MM-DD-YYYY'
          />
          <hr className='df'></hr>
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
                {tickets.map((ticket, index) => {
                  return (
                    <tr>
                      <td>{ticket.type}</td>
                      <td>
                        <input
                          min={0}
                          type='number'
                          step={1}
                          onChange={e => {
                            let ticketchange = [...tickets];
                            ticketchange[index].quantity = parseInt(
                              e.target.value
                            );
                            ticketchange[index].subtotal =
                              ticketchange[index].quantity * ticket.price;
                            setTickets(ticketchange);
                          }}
                        />
                      </td>
                      <td>{ticket.price}</td>
                      <td>{ticket.subtotal}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <h2>Total: {total}</h2>
            <button
              className='one'
              onClick={() => {
                async function postR() {
                  const id = toast.loading('Please wait...', {
                    position: 'bottom-center',
                  });
                  const response = await fetch(
                    `https://dmuseum.fly.dev/reservation/order/`,
                    {
                      method: 'POST',
                      body: JSON.stringify({
                        first_name: personal.firstName,
                        last_name: personal.lastName,
                        email: personal.email,
                        phone: personal.number,
                        date: value,
                        tickets: tickets
                          .filter(ticket => ticket.quantity > 0)
                          .map(ticket => {
                            return {
                              ticket: ticket.id,
                              amount: ticket.quantity,
                            };
                          }),
                      }),
                      headers: {
                        'Content-Type': 'application/json',
                      },
                    }
                  );
                  // .then(res => {
                  //   console.log(res);
                  //   return res.json();
                  // })
                  // .then(res => {
                  //   console.log(res);
                  // });
                  console.log(response);
                  if (response.status === 201) {
                    toast.update(id, {
                      render: 'success to Reserve',
                      type: 'success',
                      isLoading: false,
                      position: 'bottom-center',
                      hideProgressBar: true,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: 'light',
                      autoClose: true,
                    });
                  } else {
                    console.log('re');
                    toast.update(id, {
                      render: 'Reserve falied',
                      type: 'error',
                      isLoading: false,
                      position: 'bottom-center',
                      hideProgressBar: true,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: 'light',
                      autoClose: true,
                    });
                  }
                }
                postR();
              }}
            >
              Reserve
            </button>
          </div>
        </div>
      </LocalizationProvider>
    </>
  );
}
export default Reserve;
