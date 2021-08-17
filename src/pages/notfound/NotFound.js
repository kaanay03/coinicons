import './NotFound.css';
import { Link } from 'react-router-dom';

function NotFound(){
    return(
        <div className="text-center">
            <h1 id="error-code">404</h1>
            <div id="error-description">
                We could not find that resource.
                <br />
                <Link id="back-home-link" to="/">Back Home</Link>
            </div>
        </div>
    );
}

export default NotFound;