import './Header.css';
import { Link } from "react-router-dom";

function Header(){
    return(
        <div className="text-center">
            <h2 id="brand-text"><Link id="home-link" to="/">CoinIcons</Link></h2>
            <h5 className="color-secondary">The Home For Crypto Icons</h5>
        </div>
    );
}

export default Header;