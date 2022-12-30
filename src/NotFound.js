import { Link } from "react-router-dom/cjs/react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>Sorry</h1><br />
            <p>That Page cannot be found</p>
            <Link to='/'>Back to the Home Page...</Link>
        </div>
    );
}

export default NotFound;