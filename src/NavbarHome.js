import { Link } from "react-router-dom";

const NavbarHome = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/">Pokemon List</Link>
            </div>
            <div className="my-pokemon">
                <Link to="/mypokemon">My Pokemon</Link>
            </div>

        </nav>
    );
}
 
export default NavbarHome;