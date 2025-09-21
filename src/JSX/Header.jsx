import "../CSS/App.css"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
        <img src="/logo.png" className="logo" alt="logo" />
        <div className="btn-group">
          <button className="home-btn"><Link className="home-btn-link" to="/">Home</Link></button>
          <button className="menu-btn"><Link className="menu-btn-link" to="/menu">Menu</Link></button>
          <button className="location-btn"><Link className="location-btn-link" to="/location">Location</Link></button>
          <button className="contact-btn"><Link className="contact-btn-link" to="/contact">Contact</Link></button>
          <button className="aboutus-btn"><Link className="aboutus-btn-link" to="/aboutus">About Us</Link></button>
        </div>
    </header>
  )
}

export default Header