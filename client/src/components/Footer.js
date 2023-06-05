import workshop from "../assets/images/workshop.jpg"
import gondol from "../assets/images/gondol.jpg"

const Footer = ({ phone }) => {
    return (
        <>
            <footer className="w3-container w3-padding-32 w3-dark-grey">
                <div className="w3-row-padding">
                    <div className="w3-third">
                        <h3>FOOTER</h3>
                        <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae,
                            ultricies congue gravida diam non fringilla.</p>
                        <p>Powered by <a href={`https://zalo.me/${phone.replaceAll(" ", "")}`} target="_blank" rel="noopener noreferrer">Tin Doan</a></p>
                    </div>

                    <div className="w3-third">
                        <h3>BLOG POSTS</h3>
                        <ul className="w3-ul w3-hoverable">
                            <li className="w3-padding-16">
                                <img src={workshop} alt="workshop" className="w3-left w3-margin-right" style={{ width: "50px" }} />
                                <span className="w3-large">Lorem</span><br />
                                <span>Sed mattis nunc</span>
                            </li>
                            <li className="w3-padding-16">
                                <img src={gondol} alt="gondol" className="w3-left w3-margin-right" style={{ width: "50px" }} />
                                <span className="w3-large">Ipsum</span><br />
                                <span>Praes tinci sed</span>
                            </li>
                        </ul>
                    </div>

                    <div className="w3-third">
                        <h3>INTERESTS</h3>
                        <p>
                            <span className="w3-tag w3-black w3-margin-bottom">Exercise</span>&nbsp;
                            <span className="w3-tag w3-black w3-margin-bottom">Podcasting</span>&nbsp;
                            <span className="w3-tag w3-grey w3-small w3-margin-bottom">Music</span>&nbsp;
                            <span className="w3-tag w3-grey w3-small w3-margin-bottom">Travel</span>&nbsp;
                            <span className="w3-tag w3-grey w3-small w3-margin-bottom">Football</span>&nbsp;
                            <span className="w3-tag w3-grey w3-small w3-margin-bottom">Reading</span>&nbsp;
                            <span className="w3-tag w3-grey w3-small w3-margin-bottom">News</span>&nbsp;
                        </p>
                    </div>

                </div>
            </footer>

            <div className="w3-black w3-center w3-padding-24">Thank you for viewing my portfolio!</div>
        </>
    )
}

export default Footer