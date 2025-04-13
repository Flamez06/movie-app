import { Link } from "react-router-dom";
import "../css/Navbar.css"

function Navbar() {
    return (
        <div className="nav-bar">
            <button className="nav-bttn" id="mbttn" onClick={()=>location.href="/"}>Movie App</button>
            <div>
                <button className="nav-bttn" onClick={()=>location.href="/"}>Home</button>
                <button className="nav-bttn" onClick={()=>location.href="/favourites"}>Favourites</button>
            </div>
        </div>
    )
}

export default Navbar
