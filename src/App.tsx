import { Outlet } from "react-router-dom"
import Footer from "./componentsTs/Footer"
import MobileHeader from "./componentsTs/MobileHeader"
import DeskTopHeader from "./componentsTs/DeskTopHeader"
import useResize from "./hooksTs/use-Resize"

const pages = ["Home", "Photos", "Availability", "Reviews"]

const App = () => {
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
