import React from "react";
import {useState,useEffect} from "react";

const AddMovie = () => {
  const fields = {
      "id": "",
      "title": "",
      "year": "",
      "imdbID": "",
      "type": "",
      "rating": "",
      "poster": ""
  }
  const [data,setData] = useState(fields);
  const [length,setLength] = useState(0);
  const handleChange = (e)=>{
     const { name,value} = e.target;
   
     const temp = {...data};
     temp[name]=value;
     setData(temp);
  }
  useEffect(()=>{
    fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/movies`)
    .then(res=>res.json())
    .then(data=>{
      setLength(data.length);
  })
  },[])
  const post = (e)=>{
    e.preventDefault();
      const d = {...data};
      fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/movies`,{
        method:'POST',
        body:JSON.stringify(d),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res=>res.json())
      .then(d=>setData(fields))
      .catch(error=>console.error(error))
  }
  return (
    <div data-testid="add-movie">
      <h1>Add Movie</h1>
      <form data-testid="add-movie-form" onSubmit={post}>
        <input type="text" name="title" onChange={handleChange}/><label htmlFor="">Title</label>
        <input type="text" name="year" onChange={handleChange}/><label htmlFor="">Year</label>
        <input type="text" name="imdbID" onChange={handleChange}/><label htmlFor="">imdbID</label>
        <select name="type" onChange={handleChange} id="">
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          <option value="game">Game</option>
        </select>
        <input type="text" name="rating" id=""onChange={handleChange} /><label htmlFor="">Rating</label>
        <input type="text" name="poster" onChange={handleChange}/><label htmlFor="">Poster</label>
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddMovie;
