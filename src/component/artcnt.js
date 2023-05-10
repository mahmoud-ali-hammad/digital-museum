import React from 'react';
import Artview from './artview';
import './artcnt.css';
function Artcnt(props) {
  const dataone = props.art;
  return (
    <>
      <div className='highlight'>
        <div className='highlight-cnt'>
          <Artview dataview={dataone} id={props.id}/>
        </div>
      </div>
    </>
  );
}
export default Artcnt;
