import { Link } from "react-router-dom";

function SideBar(){
return(
    <ul className="list-group list-group-flush text-center p-3">
        <li className="list-group-item bg-transparent"><Link to={"/movies"} className="text-light">Movies</Link></li>
        <li className="list-group-item bg-transparent"><Link to={"/moviesList"} className="text-light">Movies List</Link></li>
        

    </ul>
)
}
export default SideBar;