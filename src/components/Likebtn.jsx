import { useState } from "react";
import '../css/Likebtn.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
function Likebtn(movie) {
    const [liked, setLiked] = useState(0)
    const click = () => {
        setLiked(!liked)
        const ls = localStorage.length
        localStorage.setItem(ls,JSON.stringify(movie))
    }
    return (
        <div className="overlay">
            <button className="like-btn" onClick={click}>
                <FontAwesomeIcon icon={faHeart} style={liked ? { color: "#e60914" } : { color: '#e68e93' }} size="xl" />
            </button>
        </div>
    )
}
export default Likebtn