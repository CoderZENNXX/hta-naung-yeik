import "../CSS/App.css"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="footer-page">
        <div className="footer-hta-naung-yeik">
          <div className="footer-logo-text">
            <img src="./logo.png" className="footer-logo" />
            <h3 className="footer-text">Hta Naung Yeik - Ki Ra Na Foods</h3>
          </div>
          <div className="footer-links">
            <a href="https://www.facebook.com/hta.naung.yeik.891580" target="_blank"><svg className="facebook-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="blue" d="M576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 440 146.7 540.8 258.2 568.5L258.2 398.2L205.4 398.2L205.4 320L258.2 320L258.2 286.3C258.2 199.2 297.6 158.8 383.2 158.8C399.4 158.8 427.4 162 438.9 165.2L438.9 236C432.9 235.4 422.4 235 409.3 235C367.3 235 351.1 250.9 351.1 292.2L351.1 320L434.7 320L420.3 398.2L351 398.2L351 574.1C477.8 558.8 576 450.9 576 320z"/></svg></a>
            <p className="footer-about-us"><Link className="footer-about-us-link" to="/about-us">About Us</Link></p>
            <p className="footer-contact"><Link className="footer-contact-link" to="/contact">Contact</Link></p>
          </div>
        </div>

        <div className="footer-dev">
          <div className="footer-dev-logo-text">
            <svg className="footer-dev-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#fb5c00" d="M216.1 272.3C212.2 269.4 208.3 268 204.5 268L187.1 268L187.1 372.5L204.5 372.5C208.4 372.5 212.3 371.1 216.1 368.2C219.9 365.3 221.9 360.9 221.9 355.1L221.9 285.4C221.9 279.6 219.9 275.2 216.1 272.3zM500.1 96L139.9 96C115.7 96 96.1 115.6 96 139.8L96 500.2C96.1 524.4 115.7 544 139.9 544L500.1 544C524.3 544 543.9 524.4 544 500.2L544 139.8C543.9 115.6 524.3 96 500.1 96zM250.2 355.2C250.2 374 238.6 402.5 201.8 402.5L155.4 402.5L155.4 237L202.8 237C238.2 237 250.2 265.5 250.2 284.3L250.2 355.2zM350.9 266.5L297.6 266.5L297.6 304.9L330.2 304.9L330.2 334.5L297.6 334.5L297.6 372.9L350.9 372.9L350.9 402.5L288.7 402.5C277.5 402.8 268.3 394 268 382.8L268 257.7C267.7 246.6 276.6 237.3 287.7 237L350.9 237L350.9 266.5zM454.5 381.8C441.3 412.5 417.7 406.4 407.1 381.8L368.6 237L401.2 237L430.9 350.7L460.5 237L493.1 237L454.6 381.8z"/></svg>
            <p className="footer-dev-text">Website built by <i>Tayzar Naing (CoderZENNXX)</i></p>
          </div>
          <div className="footer-dev-links">
            <a className="footer-dev-github" href="https://github.com/CoderZENNXX" target="_blank">GitHub</a>
          </div>
        </div>
    </footer>
  )
}

export default Footer