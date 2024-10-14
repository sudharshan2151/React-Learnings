import React from "react";
import MovieList from "./Components/MovieList";
import AddMovie from "./Components/AddMovie";
import {useState} from "react"

const App = () => {
  const[toggle,setToggle] = useState(true);
  const movie = toggle?"Add Movie":"Show Movies";
  return (
    <div className="App">
      <h1>React Movies List</h1>
      {/* The below button should have text content as either `Show Movies`or `Add Movie` */}
      <button data-testid="toggle-btn" onClick={()=>{console.log("inside");setToggle(!toggle);}}>{movie}</button>
      <div data-testid="container">
        {/* Add the required components here either AddMovie or MovieList will exist on DOM at a time*/}
        {toggle?<MovieList/>:<AddMovie/>}
      </div>
    </div>
  );
};

export default App;
