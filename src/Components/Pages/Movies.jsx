import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
function Movies(){
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            await axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=7318267e0930fb1578053cb357c3b2cd')
                .then((moviesAPI) => { setMovies(moviesAPI.data.results) });
            
        }
        fetchData();



    }, [])


    return (
        <>
        
        <div className="container bg-dark">
        <div className="row">

            {movies.map((value, index) => {

                return <div key={index} className="col-md-3 bg-dark">
                    <div className="card-group">

                        <div key={index} className="card bg-light text-dark" style={{ width: "18rem" }}>
                            <div className="card-body">
                                <img className="card-img-top" src={"https://image.tmdb.org/t/p/original/" + value.poster_path} alt="Card image cap" />

                                <h5 className="card-title text-success">{value.title}</h5>
                                <p className="card-text">{value.overview}</p>

                            </div>
                        </div>
                    </div>
                </div>
            })}

        </div>
    </div>




</>
    );

}
export default Movies;