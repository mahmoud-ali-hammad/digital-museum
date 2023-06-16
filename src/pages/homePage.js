import React from 'react';
import Slider from '../component/imageslider';
import Calender from '../component/calender';
import About from '../component/about';
import Events from '../component/events';
import Artcnt from '../component/artcnt';
import Rvideo from '../component/video';
import Footer from '../component/footer';
import MyImageGallery from './gallery';
import Loader from '../component/loader';
import { useEffect, useState } from 'react';
import './homepage.css';
// import Ab from "../component/swiper";
import { sliderData } from '../component/Imagesliderdata';
import { test } from '../component/data';
import ContentSlider from './sslider';
function HomePage() {
  // import Ab from "../component/swiper";
  // const data = [
  //   { date: '12-4-2020', title: 'Mahmoud aly', by: 'best event ever' },
  //   { date: '12-4-2020', title: 'Mahmoud aly', by: 'best event ever' },
  // ];
  const [Hdata, setHdata] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const artdata = sliderData;
  useEffect(() => {
    
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch('https://dmuseum.fly.dev/Meseum-Info/')
          .then(response => {
            return response.json();
          })
          .then(data => {
            setHdata(data);

            setLoading(false);
          });
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch(
          `https://dmuseum.fly.dev/arts/artobjects/?highlighted=true`
        );
        const data = await response.json();
        setData(
          data.results.map(info => {
            return {
              desc: info.description,
              heading: info.name,
              image: info.images[0].image,
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

  return (
    <div>
      {loading ? (
       <Loader/>
      ) : (
        <div>
          <Slider />
          <About {...Hdata[0]} />
          <Calender />

          <Events calenderdata={Hdata[0]} />
          <div className='high'>
            <h1>Gallery</h1>
            <MyImageGallery />
          </div>
          <Rvideo />
          <div className='high'>
            <h1>Highlights</h1>
            <Artcnt art={data} />
          </div>

          <Footer />
        </div>
      )}
    </div>
  );
}
export default HomePage;
