import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ContentSlider.css';
import { TbDisabled} from 'react-icons/tb';
import { GrElevator} from 'react-icons/gr';
import { MdLocalParking} from 'react-icons/md';
import { FiGift} from 'react-icons/fi';
import { FaAmericanSignLanguageInterpreting} from 'react-icons/fa';
const ContentSlider = () => {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Allow infinite loop
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
  };
  const contentItems = [
    <div>Mhamoud ali</div>,
    <div>medooo</div>,
    <div>aminnnnnnnnnnn</div>,
    // Add more slides as needed
  ];

  return (
    <Slider {...settings} className="content-slider">
      <div>
        <div className="slide-item">
        <h3><FiGift/></h3>
       <p>Gift Shop</p>
        </div>
      </div>
      <div>
        <div className="slide-item">
        <h3><FaAmericanSignLanguageInterpreting/></h3>
       <p>Sign language</p>
        </div>
      </div>
      <div>

        <div className="slide-item">
       <h3><TbDisabled/></h3>
       <p>Disabled Toilet</p>
        </div>
      </div>
      <div>
        <div className="slide-item">
          <h3><GrElevator/></h3>
          <p>Elevator</p>
        </div>
       
      </div>
      <div>
        <div className="slide-item">
          <h3><MdLocalParking/></h3>
          <p>Parking</p>
        </div>
       
      </div>
    </Slider>
  );
};

export default ContentSlider;