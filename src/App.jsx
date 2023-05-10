import Navbar from "./Components/Navbar";
import Home from "./Components/Pages/Home";
import SideBar from "./Components/SideBar";
import Movies from "./Components/Pages/Movies";
import { Route,Routes } from "react-router-dom";
import MoviesModule from "./Components/Pages/MoviesModule";

function App() {
    return ( <div className = "App bg-dark text-light" >
        <Navbar></Navbar>
        <div className="row">
            <div className="col-3 bg-dark" style={{width:"40vh",height:"100vh"}}>
                <SideBar></SideBar>
            </div>
            <div className="col-9">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="movies" element={<Movies/>}/>
                <Route path="/*" element={<MoviesModule/>}/>
            
            </Routes></div>
        </div>

        </div>
    );
}

export default App;