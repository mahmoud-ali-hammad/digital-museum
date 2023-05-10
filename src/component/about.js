import React from 'react';
import './about.css';
function About(props) {
  const downloadHanler = () => {
    // console.log(props.aboutinfo);

  };
  return (
    <>
      <div className='about-section' id='A'>
        <div className='cnt1'>
          <div className='rabout'>
            <p className='txt1'>ABOUT US</p>
            <h1 className='txt2'>{props.name}</h1>
            <p className='txt3'>
              {props.about
              
              /* The Royal carriages Museum in Boulaq is one of the earliest of its
              kind worldwide, both from the prospect of the authenticity of its
              building and the originality of its displays. The building was
              particularly adapted to preserve the cultural heritage of the
              royal carriages and all related material dating back to the era of
              Mohammed Ali Dynasty. */}
            </p>
            <button className='btn3' onClick={downloadHanler}>
              Download The Brochure
            </button>
          </div>
          <div className='labout'>
            <div className='text'>
              <h1>
                <span>E</span>stablished 2020
              </h1>
            </div>
            <div>
              <div className='image'>
                <img src={require('./image/IMG_1931.JPG')} alt='logo' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
