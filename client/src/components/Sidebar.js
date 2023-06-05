import React from "react"
import my_avatar from "../assets/images/my_avatar.png"

const Sidebar = ({ onClose, aboutMe }) => {
    return (
        <>
            {/* Sidebar/menu */}
            <nav className="w3-sidebar w3-collapse w3-white w3-animate-left" id="mySidebar">
                <br />
                <div className="w3-container">
                    <a href="#close" onClick={onClose} className="w3-hide-large w3-right w3-jumbo w3-padding w3-hover-grey" title="close menu">
                        <i className="fa fa-remove"></i>
                    </a>
                    <img src={my_avatar} alt="my avatar" style={{ width: "45%" }} className="w3-round" /><br /><br />
                    <h4><b>{aboutMe.fullname}</b></h4>
                    <p className="w3-text-grey">{aboutMe.position}</p>
                </div>
                <div className="w3-bar-block">
                    <a href="#about" onClick={onClose} className="w3-bar-item w3-button w3-padding">
                        <i className="fa fa-user fa-fw w3-margin-right"></i>ABOUT
                    </a>
                    <a href="#projects" onClick={onClose} className="w3-bar-item w3-button w3-padding">
                        <i className="fa fa-th-large fa-fw w3-margin-right"></i>PROJECTS
                    </a>
                    <a href="#contact" onClick={onClose} className="w3-bar-item w3-button w3-padding">
                        <i className="fa fa-envelope fa-fw w3-margin-right"></i>CONTACT
                    </a>
                </div>
                <div className="w3-panel w3-large">
                    <i className="fa fa-facebook-official w3-hover-opacity"></i>&nbsp;
                    <i className="fa fa-instagram w3-hover-opacity"></i>&nbsp;
                    <i className="fa fa-snapchat w3-hover-opacity"></i>&nbsp;
                    <i className="fa fa-pinterest-p w3-hover-opacity"></i>&nbsp;
                    <i className="fa fa-twitter w3-hover-opacity"></i>&nbsp;
                    <i className="fa fa-linkedin w3-hover-opacity"></i>
                </div>
            </nav>

            {/* Overlay effect when opening sidebar on small screens */}
            <div
                className="w3-overlay w3-hide-large w3-animate-opacity"
                onClick={onClose}
                style={{ cursor: "pointer" }}
                title="close side menu"
                id="myOverlay"
            ></div>
        </>
    )
}

export default Sidebar
