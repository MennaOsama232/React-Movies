import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";



function MovieDetail(){

let {movieID}=useParams()
//console.log(productID)
const [movie,setMovie]=useState({});

useEffect(() => {
    async function fetchData() {
      await axios.get(`http://localhost:3000/results/${movieID}`)
        .then((movieAPI) => { setMovie(movieAPI.data) });
    }
    fetchData();
  }, [])

return(
    <>
    <div className="card mx-auto w-75 bg-light">
  <div className="row no-gutters">
    <div className="col-4">
      <img src={"https://image.tmdb.org/t/p/original/" + movie.poster_path}  className="card-img" alt="..."/>
    </div>
    <div className="col-8">
      <div className="card-body">
        <h5 className="card-title text-dark">{movie.title}</h5>
        <p className="card-text text-dark">{movie.overview}</p>
        <p className="card-text text-dark"><small className="text-muted">{movie.release_date}</small></p>
      </div>
    </div>
  </div>
</div>
    </>
  
)
}
export default MovieDetail;