import React, { useState,useEffect } from 'react';
import { useNavigate, useParams} from 'react-router-dom';
import Artcnt from '../component/artcnt';
import './halls.css'
function Halls() {
  const { id } = useParams();
  console.log(id);
  const navigate=useNavigate();
const [halls,setHalls]=useState([])
const [loading,setLoading]=useState(false)
  useEffect(()=>{
    const fetchData = async () => {
    try {
      const response = await fetch(`https://dmss.onrender.com/arts/artobjects/?hall__name=${id}&epoch=&active=&highlighted=`);
      const data = await response.json();
      setHalls(data.results.map((info)=>
 {return {desc:info.description,
heading:info.name,image:info.images[0].image}}
      ,));
      
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
    fetchData();
  },[id])
  return (
    <> {loading ? (<h1>loading....</h1>):
       <div className='halls'>
        <h1>{id}</h1>
       <Artcnt art={halls} id={id} />
       </div>
      }
    </>
  );
}
export default Halls;
