import "../CSS/Menu.css"

function Menu() {
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
        <div className="menu-page menu-section">
            <h1 className="menu-title">Hta Naung Yeik - Menu</h1>
            <br/>
            <div className="menu-content">
                <div className="weekly-special-page menu-section">
                    <img className="weekly-special-full-menu" src="./weekly-special-menu.jpg" />
                    <p className="weekly-menu-text">Lorem ip Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quidem sit optio repellendus, eos architecto consequuntur iusto nihil aspernatur vero sunt quos commodi sequi ipsum, non atque, mollitia fuga praesentium? sum dolor sit amet consectetur adipisicing elit. Quia magni accusamus eaque mollitia in corrupti sequi nostrum eligendi tempora iure asperiores, quidem debitis qui amet nisi rem provident, dolores quas.</p>
                    <img className="weekly-menu-image" src={`./${dailySpecials[today].day}-special-background.jpg`} />
                    <h1 className="weekly-dish-text">Today's Special Dish is <br/><span className="weekly-menu">{dailySpecials[today].menu}</span></h1>
                </div>
                <div className="daily-special-page menu-section">
                    <img className="daily-special-full-menu" src="./daily-special-menu.jpg" />
                    <p className="daily-menu-text">Lorem ip Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quidem sit optio repellendus, eos architecto consequuntur iusto nihil aspernatur vero sunt quos commodi sequi ipsum, non atque, mollitia fuga praesentium? sum dolor sit amet consectetur adipisicing elit. Quia magni accusamus eaque mollitia in corrupti sequi nostrum eligendi tempora iure asperiores, quidem debitis qui amet nisi rem provident, dolores quas.</p>
                    <div className="daily-menu-images-container">
                        <img className="daily-menu-image" src="./fried-pork.jpg" />
                        <img className="daily-menu-image" src="./mohinga.jpg" />
                        <img className="daily-menu-image" src="./raw-spicy-shrimp.jpg" />
                        <img className="daily-menu-image" src="./noodles-thoke1.jpg" />
                        <img className="daily-menu-image" src="./duck-egg-curry.jpg" />
                        <img className="daily-menu-image" src="./kyar-zan-soup.jpg" />
                        <img className="daily-menu-image" src="./pork-belly-thoke.jpg" />    
                        <img className="daily-menu-image" src="./noodles-thoke2.jpg" />
                    </div>                    
                </div>
            </div>
        </div>
    )
}

export default Menu