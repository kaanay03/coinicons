import './Footer.css';
import { Link } from 'react-router-dom';

function Footer(){
    return(
        <div className="text-center mt-5">
            <div id="copyright-text" className="color-secondary">Copyright © 2021 CoinIcons</div>
            <div><Link to="/privacy" className="footer-link">Privacy</Link> | <Link to="/terms" className="footer-link">Terms</Link></div>
        </div>
    );
}

export default Footer;