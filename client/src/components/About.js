import my_avatar from "../assets/images/my_avatar.png"
import html_icon from "../assets/images/hardskills/html.png"
import css_icon from "../assets/images/hardskills/css.png"
import js_icon from "../assets/images/hardskills/javascript.png"
import bootstrap_icon from "../assets/images/hardskills/bootstrap.png"
import jquery_icon from "../assets/images/hardskills/jquery.png"
import react_icon from "../assets/images/hardskills/reactjs.png"
import git_icon from "../assets/images/hardskills/git.png"
import github_icon from "../assets/images/hardskills/github.png"

const About = ({ onOpen, about_me }) => {
    return (
        <div style={{ marginBottom: "32px" }} id="about">
            <a href="#my_avatar"><img src={my_avatar} alt="my avatar" style={{ width: "65px" }} className="w3-right w3-margin w3-hide-large w3-hover-opacity" /></a>
            <span className="w3-button w3-hide-large w3-xxlarge w3-hover-text-grey" onClick={onOpen}><i className="fa fa-bars"></i></span>

            <div className="w3-container">
                <h2><b>About Me</b></h2>
                <p>{about_me}</p>
                <hr />

                {/* Hard Skills */}
                <div id="hard-skills">
                    <h4>Hard Skills</h4>
                    <p>Core Web Technologies:</p>
                    <div className="w3-row">
                        <div className="w3-third w3-center">
                            <h4>HTML</h4>
                            <img src={html_icon} alt="html" style={{ width: "80px" }} />
                        </div>
                        <div className="w3-third w3-center">
                            <h4>CSS</h4>
                            <img src={css_icon} alt="css" style={{ width: "80px" }} />
                        </div>
                        <div className="w3-third w3-center w3-margin-bottom">
                            <h4>Javascript</h4>
                            <img src={js_icon} alt="javascript" style={{ width: "80px" }} />
                        </div>
                    </div>
                    <p>Front-end Frameworks/Libraries:</p>
                    <div className="w3-row">
                        <div className="w3-third w3-center">
                            <h4>Bootstrap</h4>
                            <img src={bootstrap_icon} alt="bootstrap" style={{ width: "80px" }} />
                        </div>
                        <div className="w3-third w3-center">
                            <h4>JQuery</h4>
                            <img src={jquery_icon} alt="jquery" style={{ width: "80px" }} />
                        </div>
                        <div className="w3-third w3-center w3-margin-bottom">
                            <h4>ReactJS</h4>
                            <img src={react_icon} alt="reactjs" style={{ width: "80px" }} />
                        </div>
                    </div>
                    <p>Version Control System:</p>
                    <div className="w3-row">
                        <div className="w3-half w3-center">
                            <h4>Git</h4>
                            <img src={git_icon} alt="git" style={{ width: "80px" }} />
                        </div>
                        <div className="w3-half w3-center">
                            <h4>Github</h4>
                            <img src={github_icon} alt="github" style={{ width: "80px" }} />
                        </div>
                    </div>
                </div>
                <br />

                {/* Progress bars / Soft Skills */}
                <div id="soft-skills">
                    <h4>Soft Skills</h4>
                    <p>Teamwork</p>
                    <div className="w3-grey">
                        <div className="w3-container w3-dark-grey w3-padding w3-center" style={{ width: "87%" }}>87%</div>
                    </div>
                    <p>Independent work</p>
                    <div className="w3-grey">
                        <div className="w3-container w3-dark-grey w3-padding w3-center" style={{ width: "95%" }}>95%</div>
                    </div>
                    <p>Self-study</p>
                    <div className="w3-grey">
                        <div className="w3-container w3-dark-grey w3-padding w3-center" style={{ width: "93%" }}>93%</div>
                    </div>
                    <p>Office computer</p>
                    <div className="w3-grey">
                        <div className="w3-container w3-dark-grey w3-padding w3-center" style={{ width: "90%" }}>90%</div>
                    </div>
                </div>
                <hr />
                <h4>My Roadmap</h4>
                <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
                    <div className="w3-third w3-margin-bottom">
                        <ul className="w3-ul w3-border w3-white w3-center w3-opacity w3-hover-opacity-off">
                            <li className="w3-black w3-xlarge w3-padding-32">Front-end</li>
                            <li className="w3-padding-16">HTML, CSS, Javascript</li>
                            <li className="w3-padding-16">Bootstrap, SASS, JQuery</li>
                            <li className="w3-padding-16">ReactJS</li>
                            <li className="w3-padding-16">Git, Github</li>
                            <li className="w3-padding-16">
                                <h2>Present</h2>
                            </li>
                        </ul>
                    </div>
                    <div className="w3-third w3-margin-bottom">
                        <ul className="w3-ul w3-border w3-white w3-center w3-opacity w3-hover-opacity-off">
                            <li className="w3-teal w3-xlarge w3-padding-32">Back-end</li>
                            <li className="w3-padding-16">Python, NodeJS</li>
                            <li className="w3-padding-16">ExpressJS</li>
                            <li className="w3-padding-16">MongoDB</li>
                            <li className="w3-padding-16">Heroku</li>
                            <li className="w3-padding-16">
                                <h2>Next 2 years</h2>
                            </li>
                        </ul>
                    </div>
                    <div className="w3-third">
                        <ul className="w3-ul w3-border w3-white w3-center w3-opacity w3-hover-opacity-off">
                            <li className="w3-black w3-xlarge w3-padding-32">Full-stack</li>
                            <li className="w3-padding-16">Javascript, ReactJS</li>
                            <li className="w3-padding-16">Python, NodeJS, ExpressJS</li>
                            <li className="w3-padding-16">MongoDB</li>
                            <li className="w3-padding-16">Heroku, Cloud</li>
                            <li className="w3-padding-16">
                                <h2>Next 3 years</h2>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About