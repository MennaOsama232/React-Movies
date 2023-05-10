import { Link } from "react-router-dom";

function Navbar (){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-success mb-3 ">
 
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      
      <li className="nav-item">
        <Link to={"/"} className="nav-link text-light">Home</Link>
      </li>
      <li className="nav-item">
        <Link to={"/movies"} className="nav-link text-light">Movies</Link>
      </li>
      <li className="nav-item">
        <Link to={"/moviesList"} className="nav-link text-light">List</Link>
      </li>
      
      
    </ul>
    
  </div>
</nav>
    )
}
export default Navbar;