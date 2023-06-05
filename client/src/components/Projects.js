// Importing project1's images
import soctrang_weather from "../assets/images/project1/soctrang.png"
import tphcm_weather from "../assets/images/project1/tphcm.png"
import hanoi_weather from "../assets/images/project1/hanoi.png"

// Importing project2's images
import trangchu_img from "../assets/images/project2/trangchu.png"
import danhsachsanpham_img from "../assets/images/project2/danhsachsanpham.png"
import chitietsanpham_img from "../assets/images/project2/chitietsanpham.png"
import dangky_img from "../assets/images/project2/dangky.png"
import dangnhap_img from "../assets/images/project2/dangnhap.png"
import sitemap_img from "../assets/images/project2/sitemap.png"

const Projects = () => {
    const handleClick = (button) => {
        // Get all buttons has className name called "project-btn"
        var buttons = document.getElementsByClassName("project-btn")

        // Replace "w3-black" className to "w3-white" from all buttons "project-btn"
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].classList.replace("w3-black", "w3-white")
        }

        // Replace "w3-black" className to "w3-white" to the clicked button
        button.classList.replace("w3-white", "w3-black")
    }

    const openProject = (project_id) => {
        let i
        let x = document.getElementsByClassName("project")
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none"
        }
        document.getElementById(project_id).style.display = "block"
    }

    return (
        <>
            <div id="projects">
                <div className="w3-container">
                    <h2><b>My Projects</b></h2>
                    <div className="w3-section w3-bottombar w3-padding-16">
                        <span className="w3-margin-right">Projects NavTabs:</span>
                        <button className="w3-button w3-black project-btn"
                            onClick={(e) => { handleClick(e.target); openProject("project1") }}><i
                                className="fa fa-sun-o w3-margin-right"></i>Project 1</button>
                        <button className="w3-button w3-white project-btn"
                            onClick={(e) => { handleClick(e.target); openProject("project2") }}><i
                                className="fa fa-snowflake-o w3-margin-right"></i>Project
                            2</button>
                    </div>
                </div>
            </div>

            <div id="project1" className="project">
                <div className="w3-container">
                    <h3>Ứng dụng dự báo thời tiết - First React App</h3>
                    <hr className="w3-border-gray" />
                    <p>Đây là một ứng dụng React hiển thị, dự báo thời tiết cho một địa điểm mà người dùng mong muốn. Ứng
                        dụng truy xuất dữ liệu từ API thời tiết (<a href="https://openweathermap.org/" className="link">Open
                            Weather Map</a>) và hiển thị dữ liệu lên các thành phần (components) của ứng dụng React.</p>
                    <div>
                        <h4>Các tính năng trong dự án</h4>
                        <ul className="w3-ul w3-hoverable">
                            <li>Người dùng có thể nhập tên của một thành phố và nhấn nút Search để xem thời tiết của thành
                                phố mà mình mong muốn.</li>
                            <li>Làm việc với API để truy xuất dữ liệu thời tiết từ dịch vụ của bên thứ ba (Open Weather Map)
                                và sử dụng dữ liệu đó cho ứng dụng.</li>
                            <li>Hiển thị thời tiết hiện tại của thành phố, bao gồm nhiệt độ (Celsius), độ ẩm và mô tả về
                                thời tiết.</li>
                            <li>Hiển thị dự báo 5 ngày cho thành phố, bao gồm nhiệt độ (Celsius), độ ẩm và mô tả thời tiết
                                các ngày.</li>
                        </ul>
                    </div>
                </div>

                <div className="w3-container">
                    <p>Một số hình ảnh về ứng dụng:</p>
                    <div className="w3-row-padding">
                        <div className="w3-third w3-container w3-margin-bottom">
                            <img src={soctrang_weather} alt="Soctrang" style={{ width: "100%" }}
                                className="w3-hover-opacity" />
                            <div className="w3-container w3-center w3-white">
                                <p><b>Thời tiết tại Sóc Trăng</b></p>
                            </div>
                        </div>
                        <div className="w3-third w3-container w3-margin-bottom">
                            <img src={tphcm_weather} alt="TPHCM" style={{ width: "100%" }}
                                className="w3-hover-opacity" />
                            <div className="w3-container w3-center w3-white">
                                <p><b>Thời tiết tại TPHCM</b></p>
                            </div>
                        </div>
                        <div className="w3-third w3-container">
                            <img src={hanoi_weather} alt="Hanoi" style={{ width: "100%" }}
                                className="w3-hover-opacity" />
                            <div className="w3-container w3-center w3-white">
                                <p><b>Thời tiết tại Hà Nội</b></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w3-container w3-padding-16">
                    <h4 className="w3-show-inline-block w3-margin-right">Live app:</h4>
                    <a href="https://doananhtingithub40102.github.io/first-react-app/" target="_blank" rel="noopener noreferrer"
                        className="link">Weather Forecast App</a>
                </div>
            </div>

            <div id="project2" className="project" style={{ display: "none" }} >
                <div className="w3-container">
                    <h3>Website giới thiệu, bán máy lạnh trực tuyến</h3>
                    <hr className="w3-border-gray" />
                    <p>Dự án được xây dựng trong môn học Hệ thống & Công nghệ Web. Đây là 1 website bán máy lạnh trực tuyến
                        (lưu trữ, truy xuất dữ liệu thông qua JS Web Storage API - Front-end).</p>
                    <div className="w3-row">
                        <div className="w3-half">
                            <h4>Các ngôn ngữ, công nghệ</h4>
                            <p className="w3-margin-left">HTML, CSS, Javascript, JQuery</p>
                        </div>
                        <div className="w3-half">
                            <h4>Các kỹ thuật Javascript</h4>
                            <ul className="w3-ul w3-hoverable">
                                <li>JS Regular Expressions</li>
                                <li>JS HTML DOM</li>
                                <li>JS Objects/ Classes</li>
                                <li>JS JSON</li>
                                <li>JS Web APIs - Web Storage API</li>
                                <li>JS Modules (import/ export)</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="w3-container">
                    <p>Một số hình ảnh về ứng dụng:</p>

                    {/* First Image Grid */}
                    <div className="w3-row-padding">
                        <div className="w3-third w3-container w3-margin-bottom">
                            <img src={trangchu_img} alt="trangchu" style={{ width: "100%" }}
                                className="w3-hover-opacity" />
                            <div className="w3-container w3-white">
                                <p><b>Trang chủ</b></p>
                            </div>
                        </div>
                        <div className="w3-third w3-container w3-margin-bottom">
                            <img src={danhsachsanpham_img} alt="danhsachsanpham" style={{ width: "100%" }}
                                className="w3-hover-opacity" />
                            <div className="w3-container w3-white">
                                <p><b>Trang danh sách sản phẩm (có bộ lọc)</b></p>
                            </div>
                        </div>
                        <div className="w3-third w3-container">
                            <img src={chitietsanpham_img} alt="chitietsanpham" style={{ width: "100%" }}
                                className="w3-hover-opacity" />
                            <div className="w3-container w3-white">
                                <p><b>Trang chi tiết sản phẩm</b></p>
                            </div>
                        </div>
                    </div>
                    {/* Second Image Grid */}
                    <div className="w3-row-padding">
                        <div className="w3-third w3-container w3-margin-bottom">
                            <img src={dangky_img} alt="dangky" style={{ width: "100%" }} className="w3-hover-opacity" />
                            <div className="w3-container w3-white">
                                <p><b>Trang đăng ký tài khoản</b></p>
                            </div>
                        </div>
                        <div className="w3-third w3-container w3-margin-bottom">
                            <img src={dangnhap_img} alt="dangnhap" style={{ width: "100%" }}
                                className="w3-hover-opacity" />
                            <div className="w3-container w3-white">
                                <p><b>Trang đăng nhập</b></p>
                            </div>
                        </div>
                        <div className="w3-third w3-container">
                            <img src={sitemap_img} alt="sitemap" style={{ width: "100%" }}
                                className="w3-hover-opacity" />
                            <div className="w3-container w3-white">
                                <p><b>Sitemap của website</b></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w3-container w3-padding-16">
                    <h4 className="w3-show-inline-block w3-margin-right">Live app:</h4>
                    <a href="https://doananhtingithub40102.github.io/HTCNWeb/html/trangchu.html" target="_blank" rel="noopener noreferrer"
                        className="link">CleanAir</a>
                </div>
            </div >
        </>
    )
}

export default Projects