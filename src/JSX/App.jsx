import Header from "./Header.jsx"
import Home from "./Home.jsx"
import Menu from "./Menu.jsx"
import Location from "./Location.jsx"
import Contact from "./Contact.jsx"
import AboutUs from "./AboutUs.jsx"
import Footer from "./Footer.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="app">    
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/menu" element={<Menu />}/>
            <Route exact path="/location" element={<Location />}/>
            <Route exact path="/contact" element={<Contact />}/>
            <Route exact path="/about-us" element={<AboutUs />}/>
          </Routes>
          <Footer />
      </div>
    </Router>
  )
}

export default App