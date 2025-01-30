// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Box from './box';
// import axios from 'axios';


function App() {
  const [alldata,setallData] = useState([]);
  function getAlldata(){
    fetch("http://localhost:5000/cource/").then(response => response.json()).then((data) => setallData(data))
      .catch((err) => console.log(err));
       console.log(alldata);
  }

  useEffect(()=>{
  getAlldata();
  },[])
  
  return <>
    
    { alldata.map(ele=>{
      return <Box key={ele._id} name={ele.name} image={ele.image} description={ele.description} imageType={ele.imageType} />
    })}
  
  </>
}

export default App;
