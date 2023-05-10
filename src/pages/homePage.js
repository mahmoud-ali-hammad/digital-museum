import React from 'react';
import Slider from '../component/imageslider';
import Calender from '../component/calender';
import About from '../component/about';
import Events from '../component/events';
import Artcnt from '../component/artcnt';
import Rvideo from '../component/video';
import Footer from '../component/footer';
import { useEffect,useState } from 'react';
import './homepage.css'
// import Ab from "../component/swiper";
import { sliderData } from '../component/Imagesliderdata';
import {test} from '../component/data';
function HomePage() {
  // import Ab from "../component/swiper";
  const data = [
    { date: '12-4-2020', title: 'Mahmoud aly', by: 'best event ever' },
    { date: '12-4-2020', title: 'Mahmoud aly', by: 'best event ever' },
  ];
  const [Hdata,setHdata]=useState([])
  const [loading, setLoading] = useState(false);
  const artdata = sliderData;
useEffect(()=>{
  const fetchData = async () => {
  try {
    const response = await fetch("https://dmss.onrender.com/Meseum-Info/");
    const data = await response.json();
    setHdata(data);
    setLoading(false);
  } catch (error) {
    console.error(error);
    setLoading(false);
  }
};
  fetchData();
},[])

  return( <div>
{loading ? (<h2>loading....</h2>):
    
      (<div>
      <Slider />

      <About {...Hdata[0]} />
      <Calender />
      <Events calenderdata={data} />
      <Rvideo />
      <div className='high'>
        <h1>Highlights</h1>
      <Artcnt art={artdata} />
      <Artcnt art={test} />
      </div>
      <Footer />
      </div>
     )
 } 
 
 </div>
  );
}
export default HomePage;
