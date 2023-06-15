import React from "react";
import './map.css'
import Footer from "../component/footer";
function Map(){
  return(<>
      <div className="wh">
        <div className="div">
      <h1>Map</h1></div>
        <div className="cnnt">
        <div className="map">
      <iframe
        title="Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.3357170413697!2d31.22874527461687!3d30.055910018029035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840e9cd7ea781%3A0xc8a404d934549270!2sRoyal%20Chariots%20Museum!5e0!3m2!1sen!2seg!4v1686844779215!5m2!1sen!2seg" 
        width="600"
        height="450"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div></div>
    <Footer/>
    </div>
  
  
  </>)
}
export default Map