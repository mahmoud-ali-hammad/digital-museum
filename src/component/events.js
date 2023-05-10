import React from 'react';
import './events.css';
// import { edata } from './evnetsdata';
import { AiOutlineCalendar } from 'react-icons/ai';
function Events(props) {
  const data=props.calenderdata;
  return (
    <>
      <div className='containerone'>
        <h1>incoming evetns</h1>
        <div className='containertwo'>
          {data.map((data, index) => {
            return (
              <div className='col' key={index}>
                <AiOutlineCalendar className='icon' />
                <h2>{data.date}</h2>
                <h1>{data.title}</h1>
                <p>{data.by}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Events;
