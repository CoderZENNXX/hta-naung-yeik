import "../CSS/App.css"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { Link } from "react-router-dom"
function Home() {
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
    <main className="home">
        <h1 className="title">Hta Naung Yeik - Ki Ra Na Myanmar Foods</h1>

        <div className="home-content">
          <div className="daily-special section" style={{
            backgroundImage: `url(./${dailySpecials[today].day}-special-background.jpg)`
          }}>
            <img className="daily-special-image" src={`./${dailySpecials[today].day}-special.jpg`} />
            <h1 className="daily-special-text">Today's Special Dish is <br/><span className="daily-special-menu">{dailySpecials[today].menu}</span></h1>
          </div>

          <div className="menu section">
            <img className="preview-menu" src="./designed-weekly-special-menu.png" />
            <h1 className="menu-text">Lorem ip Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quidem sit optio repellendus, eos architecto consequuntur iusto nihil aspernatur vero sunt quos commodi sequi ipsum, non atque, mollitia fuga praesentium? sum dolor sit amet consectetur adipisicing elit. Quia magni accusamus eaque mollitia in corrupti sequi nostrum eligendi tempora iure asperiores, quidem debitis qui amet nisi rem provident, dolores quas.</h1>
            <button className="view-menu"><Link className="view-menu-link" to="/menu">View Menu</Link></button>
          </div>

          <div className="order section">
            <h1 className="order-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae et impedit recusandae officiis mollitia sit, blanditiis sapiente minima cupiditate enim voluptatum labore eos deleniti voluptatibus reiciendis exercitationem odio quasi nobis?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est atque architecto cum ut quas. Consequatur quo natus quidem quis neque ut officiis dicta. Ratione esse temporibus vero quae recusandae illum.</h1>
            <button className="order-now"><a className="order-now-link" href="https://www.facebook.com/hta.naung.yeik.891580" target="_blank">Order Now</a></button>
          </div>

          <div className="location section">
            <MapContainer className="map-location" zoom={20} center={[16.71388, 98.58937]}>
              <TileLayer
                className="location-tile-layer"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              />
              <Marker position={[16.71388, 98.58937]}>
                <Popup>Hta Naung Yeik</Popup>
              </Marker>
            </MapContainer>
            <div className="location-content">
              <button className="more-location"><Link className="more-location-link" to="/location">View More</Link></button>
              <h1 className="location-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ut id hic, explicabo ratione libero nesciunt dolores illo corporis doloremque optio natus molestiae veniam? Voluptas error quod ducimus possimus accusantium.</h1>
            </div>
          </div>
        </div>
    </main>
  )
}

export default Home