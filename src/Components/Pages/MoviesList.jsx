import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
function MoviesList() {
  const [movies, setMovies] = useState([]);



  useEffect(() => {
    
    getAllMovies();
  }, [])


//getAllProducts
async function getAllMovies() {
  const moviesAPI=await fetch('http://localhost:3000/results').then((res)=>res.json())
    setMovies(moviesAPI) 
}

//update product
const updateMovie =(movieID)=>{
fetch(`http://localhost:3000/results/${movieID}`, {
  method: 'PATCH', /* or PATCH */
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'new movie title',
    
  })
})
.then(res => res.json()).then(getAllMovies);
}

//delete product
const deleteMovie = (movie) =>{

  Swal.fire({
    title: `Delete ${movie.title}?`,
    text: "You won't be able to undo this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#198754',
    cancelButtonColor: '#800000',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(`http://localhost:3000/results/${movie.id}`, {
        method: 'DELETE',
      })
      .then(res => res.json()).then(getAllMovies);
      
    }
  })


}

  return (
    <>

      <Link to="/add" className="btn btn-warning col-md-12 my-4">Add New Movie</Link>
      <table className="table text-light">
        <thead className="thead-light">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Release Date</th>
            <th scope="col">  </th>
            <th scope="col">  </th>
            <th scope="col">  </th>

          </tr>
        </thead>
        <tbody>

          {movies.map((movie) => {
            return (
              <tr key={movie.id}>

                <td>{movie.id}</td>
                <td>{movie.title}</td>
                <td>{movie.release_date}</td>
                <td><Link to={`/movies/${movie.id}`} type="button" className="btn btn-outline-success">View</Link></td>
                <td><button type="button" className="btn btn-outline-warning" onClick={()=>{updateMovie(movie.id)}}>Update</button></td>
                <td><button type="button" className="btn btn-outline-danger" onClick={()=>{deleteMovie(movie)}}>Delete</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
export default MoviesList;