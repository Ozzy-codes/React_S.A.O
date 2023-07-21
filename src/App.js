import { Outlet, Link } from "react-router-dom"
import { useState } from "react"

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <div className="flex justify-between p-4 border-b-2">
        <h1 className="text-2xl">Sage and Oak</h1>
        <button onClick={handleClick}>Open drawer</button>
      </div>
      {isOpen && (
        <div className="px-4 flex flex-col">
          <Link
            onClick={handleClick}
            to={`/`}
            className="py-2 border-b-2">
            HOME
          </Link>
          <Link
            onClick={handleClick}
            to={`location/1`}
            className="py-2 border-b-2">
            LOCATION
          </Link>
          <Link className="py-2 border-b-2">PHOTOS</Link>
          <Link className="py-2 border-b-2">AVAILABILITY</Link>
          <Link className="py-2 border-b-2">REVIEWS</Link>
        </div>
      )}
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default App
