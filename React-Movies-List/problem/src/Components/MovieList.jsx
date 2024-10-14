import React from "react";
import {useState,useEffect} from "react";
import MovieCard from "./MovieCard";
import Loading from "./Loading";
const MovieList = () => {
  const [data,setData] = useState([]);
  const[dup,setDup] = useState([]);
  const [loading,setLoading] = useState(false);
  const init = ()=>{
    fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/movies`)
    .then(res=>res.json())
    .then(data=>{
      setDup(data);
      setData(data);
  })
  }
  useEffect(()=>{
    setLoading(true);
    init();
    setLoading(false);
  },[])
  const sort = (e)=>{
    let value = e.target.value;
    if(value==="default"){
      setData(dup);
      return;
    }
    const ar = [...data]
    if(value==="oldest-first"){
      fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/movies?_sort=year`)
      .then(res=>res.json())
      .then(data=>{
        
        setData(data);
      })
    }
    else{
      fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/movies?_sort=year&_order=desc`)
      .then(res=>res.json())
      .then(data=>{
        setData(data);
      })
    }
    
  }

  const filter = (e)=>{
    let value = e.target.value;
    if(value==="default"){
      setData(dup);
      return;
    }
    
    fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/movies?type=${value}`)
    .then(res=>res.json())
    .then(data=>{
      setData(data);
    })
    
  }

  if(loading)return <Loading/>

  return (
    <div data-testid="movie-list">
      <h1>Movies List</h1>
      <div>
        <label>Sort By Year</label>
        <select data-testid="sort" onChange={sort}>
          <option value="default">--</option>
          <option value="oldest-first">Oldest first</option>
          <option value="newest-first">Newest first</option>
        </select>
      </div>
      <div>
        <label>Filter By Type</label>
        <select data-testid="filter" onChange={filter}>
          <option value="default">--</option>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          <option value="game">Game</option>
        </select>
      </div>
      {/* Either Loading component or below div with `data-testid="movie-container"` should exist on DOM at a time */}
      <div data-testid="movie-container">
        {/* render all the movies data with the help of MovieCard component here */}
        {data.map(a=><MovieCard {...a}/>)}
      </div>
    </div>
  );
};

export default MovieList;
