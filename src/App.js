import './App.css';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
function App() {

  const [images, setImages] = useState([])
  const [search, setSearch] =useState('');

  useEffect(()=>{
    fetchImages();
  },[search])

  const fetchImages= async ()=>{

    const headers = {
      Authorization:'Client-ID Tn0M3jozghR4Y1FYHR9shAKiYIintWx5CdoqTeqwouU'
    }
    const response = await axios.get(`https://api.unsplash.com/search/photos/?page=1&query=${search}`,{headers})
    
    .then((response)=>{ 
     
      
      setImages(response.data.results)
      console.log(images)
     })
    .catch((e)=>console.log(e));
  }
  return (
    <div className="App">
     <header>
      <label htmlFor='search'>Search </label><input type="text" id="search" onChange={(e)=>setSearch(e.target.value)}/>
     </header>
     <main className="images">
     
      { images && images.map((item,index)=>{
       return( <div className="imgdiv" key={index}>
          <img srcSet={item.urls.small} />
        </div>)
      })}


     </main>
  
    </div>
  );
}

export default App;
