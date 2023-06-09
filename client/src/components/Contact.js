const Contact = ({ aboutMe }) => {
    return (
        <div className="w3-container w3-padding-large w3-grey" id="contact">
            <h2><b>Contact Me</b></h2>
            <div className="w3-row-padding w3-center w3-padding-24" style={{ margin: "0 -16px" }}>
                <div className="w3-third w3-dark-grey">
                    <p><i className="fa fa-envelope w3-xxlarge w3-text-light-grey"></i></p>
                    <p>{aboutMe.email}</p>
                </div>
                <div className="w3-third w3-teal">
                    <p><i className="fa fa-map-marker w3-xxlarge w3-text-light-grey"></i></p>
                    <p>{aboutMe.address}</p>
                </div>
                <div className="w3-third w3-dark-grey">
                    <p><i className="fa fa-phone w3-xxlarge w3-text-light-grey"></i></p>
                    <p>{aboutMe.phone}</p>
                </div>
            </div>
            <hr className="w3-opacity" />
            <form action="/action_page.php" target="_blank">
                <div className="w3-section">
                    <label>Name</label>
                    <input className="w3-input w3-border" type="text" name="Name" required />
                </div>
                <div className="w3-section">
                    <label>Email</label>
                    <input className="w3-input w3-border" type="text" name="Email" required />
                </div>
                <div className="w3-section">
                    <label>Message</label>
                    <input className="w3-input w3-border" type="text" name="Message" required />
                </div>
                <button type="submit" className="w3-button w3-black w3-margin-bottom"><i
                    className="fa fa-paper-plane w3-margin-right"></i>Send Message</button>
            </form>
        </div>
    )
}

export default Contact