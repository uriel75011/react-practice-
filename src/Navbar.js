import './navbarstylesheet.css'
import { Link } from 'react-router-dom';    
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>THE BEST SINGERS</h1>
            <div className="links">
           <Link to="/">בית</Link>
           <Link to="/create">הוספה</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;