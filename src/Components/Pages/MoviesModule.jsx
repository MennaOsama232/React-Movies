import React from "react";
import { Routes, Route } from "react-router-dom";
import MoviesList from "./MoviesList";
import AddMovie from "./AddMovie";
import MovieDetail from "./MovieDetail";

const MoviesModule = () => {

    return (
        <Routes>
            <Route path="moviesList" element={<MoviesList/>} />
            <Route path="add" element={<AddMovie/>} />
            <Route path="/movies/:movieID" element={<MovieDetail/>} />
        </Routes>
    )

}
export default MoviesModule;