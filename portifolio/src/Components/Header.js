import { NavLink } from "react-router-dom";
import {FaUserCircle} from "react-icons/fa"

const Header = () => {

    return (
        <nav id="navbar">
            <NavLink to={"/"}>
                <div>
                    <i className="icon"><FaUserCircle/></i>
                    <h1 className="dt">João Vitor</h1>
                </div>
            </NavLink>
            

            <ul class="flex-link">
                <NavLink to={"/About"}>
                <li class="nav-link">About</li>
                </NavLink>
                <NavLink to="/Projects">
                <li class="nav-link">Projects</li>
                </NavLink>
                <NavLink to="/Contact">
                <li class="nav-link">Contact</li>
                </NavLink>
            </ul> 
    </nav>
    );
};

export default Header