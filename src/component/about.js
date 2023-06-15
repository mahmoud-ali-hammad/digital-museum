import React from 'react';
import './about.css';
function About(props) {
  const downloadHanler = () => {
    // console.log(props.aboutinfo);
    console.log(props.downloadableItems[0].link);
  };
  return (
    <>
      <div className='about-section' id='A'>
        <div className='cnt1'>
          <div className='rabout'>
            <p className='txt1'>ABOUT US</p>
            <h1 className='txt2'>{props.name}</h1>
            <p className='txt3'>{props.about}</p>

            <a
              className='btn3'
              download
              href='https://arts981.s3.amazonaws.com/files/rcm-en.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAV2QFCCARZAL3X7OR%2F20230614%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20230614T231219Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=db90b8cc4d43892b2a584ae7adec697b54dd75e57edb2cb808852f1ef677310f'
              target='_blank'
            >
       
              Download The Brochure
            </a>
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
