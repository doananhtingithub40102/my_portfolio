import { useState, useEffect } from "react"
import Sidebar from "./components/Sidebar"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import "./App.css"

const App = () => {
  const [aboutme, setAboutMe] = useState([])

  useEffect(() => {
    async function getAboutMe() {
      const response = await fetch(`${process.env.REACT_APP_YOUR_HOSTNAME}/aboutme/`)

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`
        window.alert(message)
        return
      }

      const records = await response.json()
      setAboutMe(records)
    }

    getAboutMe()

    return
  }, [aboutme])

  const sidebarClose = () => {
    // Implement the logic for closing the sidebar
    document.getElementById("mySidebar").style.display = "none"
    document.getElementById("myOverlay").style.display = "none"

  }
  const sidebarOpen = () => {
    // Implement the logic for open the sidebar
    document.getElementById("mySidebar").style.display = "block"
    document.getElementById("myOverlay").style.display = "block"
  }

  return (
    aboutme.length > 0 && (
      <>
        <Sidebar onClose={sidebarClose} aboutMe={aboutme[0]} />

        {/* PAGE CONTENT */}
        <div className="w3-main">

          {/* About Me Section */}
          <About onOpen={sidebarOpen} about_me={aboutme[0]["about_me"]} />

          {/* Projects Section */}
          <Projects />

          {/* Contact Section */}
          <Contact aboutMe={aboutme[0]} />

          {/* Footer */}
          <Footer phone={aboutme[0]["phone"]} />
        </div>
      </>
    )
  )
}

export default App