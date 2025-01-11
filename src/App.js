import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import MobileHeader from "./components/MobileHeader"
import DeskTopHeader from "./components/DeskTopHeader"
import useResize from "./hooks/use-Resize"

const pages = ["Home", "Photos", "Availability", "Reviews"]

function App() {
  const { nextViewPort } = useResize(1024)

  const headerOption = nextViewPort ? (
    <DeskTopHeader
      navLinks={pages}
    />
  ) : (
    <MobileHeader
      navLinks={pages}
    />
  )

  return (
    <div>
      {headerOption}
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
