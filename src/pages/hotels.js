import React, { useState, useEffect } from 'react';
import Loader from '../component/loader';
import './hotels.css'
import { useNavigate } from 'react-router-dom';
import Footer from '../component/footer'
function Hotels() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const nv=useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://dmuseum.fly.dev/hotels/`
        );
        const data = await response.json();
        setData(data);
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
      ) : (<>
      <div className="hotel">
<div className="mainone">
<div className="head">
 <h1>Nearby Hotels</h1> 
</div>
</div>
<div className="maintwo">
<div className="body">

{data.map(d=>{
return (
<div className="one" onClick={f=>{window.open(d.link, '_blank')}}>
  <div className="two">
    <div className="three">
      {console.log(d.link)}
<img src={d.image} alt="photo" />
    </div>
    <div className="four">
    <h3>{d.name}</h3>
<h5>{d.address}</h5>


<p>{d.about}</p>
<h4>Rating : {d.rating}</h4>
    </div>
  </div>

</div>

)



})
}

</div>
</div>

      </div>
      </>)
      }
        <Footer/>
      </div>
      
      )
}
export default Hotels;