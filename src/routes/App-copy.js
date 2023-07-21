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
        <div className="px-4">
          <div className="py-2 border-b-2">HOME</div>
          <div className="py-2 border-b-2">LOCATION</div>
          <div className="py-2 border-b-2">PHOTOS</div>
          <div className="py-2 border-b-2">AVAILABILITY</div>
          <div className="py-2 border-b-2">REVIEWS</div>
        </div>
      )}
    </div>
  )
}

export default App
