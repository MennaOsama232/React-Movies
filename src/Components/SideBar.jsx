import { Link } from "react-router-dom";

function SideBar(){
return(
    <ul className="list-group list-group-flush text-center p-3">
        <li className="list-group-item bg-transparent"><Link to={"/movies"} className="text-light">Get All Movies</Link></li>
        <li className="list-group-item bg-transparent"><Link to={"/products"} className="text-light">Get All Products</Link></li>
        

    </ul>
)
}
export default SideBar;