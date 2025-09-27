import "../CSS/Contact.css"

function Contact() {
    return (
        <div className="contact-page">
            <h1 className="contact-title">Hta Naung Yeik - Contact</h1>
            <div className="contact-content">
                <div className="hta-naung-yeik-contact-image-container">
                    <img className="hta-naung-yeik-facebook-image" src="./hta-naung-yeik-fb.png" />
                    <img className="hta-naung-yeik-ph-no-image" src="./hta-naung-yeik-ph-no.jpg" />
                </div>
                <div className="facebook-contact">
                    <h1>Facebook:</h1>
                    <a href="https://www.facebook.com/hta.naung.yeik.891580" target="_blank"><svg className="facebook-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="blue" d="M576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 440 146.7 540.8 258.2 568.5L258.2 398.2L205.4 398.2L205.4 320L258.2 320L258.2 286.3C258.2 199.2 297.6 158.8 383.2 158.8C399.4 158.8 427.4 162 438.9 165.2L438.9 236C432.9 235.4 422.4 235 409.3 235C367.3 235 351.1 250.9 351.1 292.2L351.1 320L434.7 320L420.3 398.2L351 398.2L351 574.1C477.8 558.8 576 450.9 576 320z"/></svg></a>
                </div>
                <div className="phone-contact">
                    <h1>Phone: 0612250509</h1>
                </div>

            </div>
        </div>
    )
}

export default Contact