import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import MobileHeader from "./components/MobileHeader"

const pages = [
  "Home",
  "Location",
  "Photos",
  "Availability",
  "Reviews"
]
const header = "Sage and Oak"

function App() {
  return (
    <div>
      <MobileHeader
        header={header}
        navLinks={pages}
      />
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App
