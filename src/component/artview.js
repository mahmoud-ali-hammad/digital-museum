import React from 'react';
import { Link } from 'react-router-dom';
import './artview.css';
import { sliderData } from './Imagesliderdata';
import { useNavigate } from 'react-router-dom';
function Artview(props) {
  const finaldata=props.dataview;
  const nv=useNavigate()
  return (
    <>
    {finaldata.map((mm,index)=> 
    {return<>
    <div className='coll'>
        <div className='img-holder'>
          <img src={mm.image} alt='logo' />
        </div>
        <h2>{mm.heading}</h2>
        {/* <p>{mm.desc}</p> */}
        <Link to={`/halls/${props.id}/${mm.heading}`} >more</Link>
        {/* <button onClick={e=>{nv('/requests', {
                    state: {
                     
                    },
                  });}}></button> */}
      </div>
    </>})}
      {/* <div className='coll'>
        <div className='img-holder'>
          <img src={sliderData[0].image} alt='logo' />
        </div>
        <h2>antcianat</h2>
        <p>highlighted imge</p>
        <Link>more</Link>
      </div> */}
    </>
  );
}
export default Artview;
