import React from "react";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
function Details (){
  // const {id}
  const { id2,id } = useParams();
  const [halls,setHalls]=useState([])
const [loading,setLoading]=useState(false)
  useEffect(()=>{
    const fetchData = async () => {
    try {
      const response = await fetch(`https://dmss.onrender.com/arts/artobjects/?hall__name=${id}&epoch=&active=&highlighted=`);
      const data = await response.json();
      console.log(data.results.filter(info=>
        info.name===id2
      ));
      
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
    fetchData();
  },[])
return (<>

<div className="details">

</div>

</>)
}
export default Details