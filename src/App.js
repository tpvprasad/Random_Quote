import React, { useState,useEffect } from 'react';

function App() {
 const [quote, setQuote] = useState([]);

 const fetchData =() => {
  fetch("https://api.quotable.io/random")
  .then((res)=> res.json())
  .then((data)=>{
    console.log(data);
    setQuote(data);
  }) 
 }
 useEffect(()=>{
  fetchData();
 },[]);
const getQuote=() => {
  fetchData();
}

  return (
    <div>
      <button onClick={getQuote}>Generate Quote</button>
     
      <div className="box-centerside">
      <div className="text">
        <p>{quote?.content}</p>
      </div>
      <div className="author">
        <h5>{quote?.author}</h5>
        </div>
      </div>
    </div>
  
  )
}

export default App