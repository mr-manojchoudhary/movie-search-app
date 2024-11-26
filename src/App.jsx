import React, { useState,useEffect } from "react";
import SearchBox from './SearchBox';
import Display from "./Display";

export default function App(){
  const [name,setName] = useState("");
  const [movies,setMovie] =useState([]);
  const nameChangeHandler = (data) => {
    setName(data);

  }

  const fetchMovies = async () =>{
    let API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

    if(name != "") {
      API = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${name}`;

    } 
     
    const response = await fetch (API);
    const data = await response.json();
    
    setMovie(data.results);
    
  }

  useEffect(
    () => {
      fetchMovies();
    },[name]
  )
    
  
  return(
    <div className="container">
      <SearchBox placeholder="Search movie name" ChangeHandler={nameChangeHandler} />
      <Display movies={movies}/>
    </div>
  )
}