import React,{useState,useEffect} from 'react'
import axios from "../axios";
import './Row.css';
const Row = ({title,fetchUrl,isLargerRow=false}) => {

  const [movies,setMovies] = useState([]);
  const baseUrl = "https://image.tmdb.org/t/p/original/";

  useEffect(()=>{
    async function fetchData(){
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    } ;
    fetchData();

  },[fetchUrl]);

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row__posters'>
          {
          movies.map(
          (movie)=>
          ((isLargerRow && movie.poster_path) || 
           (!isLargerRow && movie.backdrop_path) )&& (
            <img
            className={`row__poster ${isLargerRow && "row__posterLarger"}`}
            key={movie.id}
            src={`${baseUrl}${isLargerRow? movie.poster_path:movie.backdrop_path}`}
            alt={movie.name}
            />
           )
           )}
      </div>
    </div>
  )
}

export default Row
