import React from "react";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from '../component/footer';
import './hallsdetails.css'
import Loader from "../component/loader";
function Details (){
  // const {id}
  const { id2,id } = useParams();
  const [halls,setHalls]=useState([])
  const [item,setItem]=useState([])
const [loading,setLoading]=useState(true)
  useEffect(()=>{
    const fetchData = async () => {
    try {
      const response = await fetch(`https://dmuseum.fly.dev/arts/artobjects/?hall__name=${id}`);
      const data = await response.json();
      const filtered=data.results.filter(info=>info.name===id2
      );
      setItem(filtered);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
    fetchData();
  },[])
  console.log(item);

return (<>
<div>
 
      {loading ? (
       <div ><Loader/></div> // Show loading indicator when isLoading is true
      ) : ( <div className="wcontent">
        <div className="right">
        <img className='photo' src={item[0].images[0].image} alt='logo' />
        </div>
        <div className="left" >
      <h2>{item[0].name}</h2>
      <h3>{item[0].type}</h3>
      <p>{item[0].description}</p>
      </div>
      </div>
      )}
      <Footer />
  
      </div>
</>)
}
export default Details