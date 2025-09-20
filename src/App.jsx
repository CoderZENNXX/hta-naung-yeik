import './App.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

function App() {
  const today = new Date().getDay()

  const dailySpecials = {
    0: {day: "sunday", menu: "Chicken Palatar"},
    1: {day: "monday", menu: "Samosa Thoke"},
    2: {day: "tuesday", menu: "Kyar Zan Soup"},
    3: {day: "wednesday", menu: "Grilled Pork Belly"},
    4: {day: "thursday", menu: "Pyi Rice Thoke, Fried Tofu, Thoke's"},
    5: {day: "friday", menu: "Shan Noodles, Grilled Duck, Grilled Chicken"},
    6: {day: "saturday", menu: "Coconut Milk Noodles"}
  }

  return (
    <div className="app">
      <header className="header">
        <img src="/logo.png" className="logo" alt="logo" />
        <div className="btn-group">
          <button className="home-btn">Home</button>
          <button className="menu-btn">Menu</button>
          <button className="location-btn">Location</button>
          <button className="contact-btn">Contact</button>
          <button className="about-btn">About Us</button>
        </div>
      </header>

      <main className="main">
        <h1 className="title">Hta Naung Yeik - Ki Ra Na Myanmar Foods</h1>

        <div className="main-content">
          <div className="daily-special section" style={{
            backgroundImage: `url(./${dailySpecials[today].day}-special-background.jpg)`
          }}>
            <img className="daily-special-image" src={`./${dailySpecials[today].day}-special.jpg`} />
            <h1 className="daily-special-text">Today's Special Dish is <br/><span className="daily-special-menu">{dailySpecials[today].menu}</span></h1>
          </div>

          <div className="menu section">
            <img className="preview-menu" src="./daily-special-menu.png" />
            <p className="menu-text">Lorem ip Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quidem sit optio repellendus, eos architecto consequuntur iusto nihil aspernatur vero sunt quos commodi sequi ipsum, non atque, mollitia fuga praesentium? sum dolor sit amet consectetur adipisicing elit. Quia magni accusamus eaque mollitia in corrupti sequi nostrum eligendi tempora iure asperiores, quidem debitis qui amet nisi rem provident, dolores quas.</p>
            <button className="view-menu">View Menu</button>
          </div>

          <div className="order section">
            <h1 className="order-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae et impedit recusandae officiis mollitia sit, blanditiis sapiente minima cupiditate enim voluptatum labore eos deleniti voluptatibus reiciendis exercitationem odio quasi nobis?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est atque architecto cum ut quas. Consequatur quo natus quidem quis neque ut officiis dicta. Ratione esse temporibus vero quae recusandae illum.</h1>
            <button className="order-now"><a className="order-now-link" href="https://www.facebook.com/hta.naung.yeik.891580" target="_blank">Order Now</a></button>
          </div>

          <div className="location section">
            <MapContainer className="map-location" zoom={20} center={[16.71388, 98.58937]}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              />
              <Marker position={[16.71388, 98.58937]}>
                <Popup>Hta Naung Yeik</Popup>
              </Marker>
            </MapContainer>
            <button className="google-map-location"><a className="google-map-location-link" href="https://www.google.com/maps/place/Hta+Naung+Yeik/@16.7141041,98.5889539,19z/data=!4m6!3m5!1s0x30dd994acb048c41:0xe266b29db0592848!8m2!3d16.71388!4d98.58937!16s%2Fg%2F11tws0slqb?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D" target="_blank">View On Google Maps</a></button>
            <h1 className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae et impedit recusandae officiis mollitia sit, blanditiis sapiente minima cupiditate enim voluptatum labore eos deleniti voluptatibus reiciendis exercitationem odio quasi nobis?</h1>
          </div>
        </div>
      </main>

      <footer className="footer">
          <h1>o</h1>
      </footer>
    </div>
  )
}

export default App
