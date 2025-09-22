import "../CSS/Menu.css"

function Menu() {
    return (
        <div className="menu-page menu-section">
            <h1 className="menu-title">Hta Naung Yeik - Menu</h1>
            <div className="menu-content">
                <div className="weekly-special-page">
                    <img className="weekly-special-full-menu" src="./weekly-special-menu.jpg" />
                </div>

                <div className="daily-special-page menu-section">
                    <img className="daily-special-full-menu" src="./daily-special-menu.jpg" />
                </div>
            </div>
        </div>
    )
}

export default Menu