import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
	return (
		<div className="navbar row">
			<div className="home row">
				<img 
					src="src\assets\logo.svg"
					alt="UCSC Blueprint yellow and blue logo"
					className="logo" />
				<Link
					to='/'
					className="nav-link nav-title">UCSC Blueprint</Link>
			</div>

			<div className="nav-links">
				<Link to="/projects" className="nav-link">Projects</Link>
				<Link to="/students" className="nav-link">Students</Link>
				<Link to="/nonprofits" className="nav-link">Nonprofits</Link>
				<Link to="/team" className="nav-link">Team</Link>
				<Link to="/contact" className="nav-link outlined">Contact</Link>
			</div>
		</div>
	);
};

export default Navbar;