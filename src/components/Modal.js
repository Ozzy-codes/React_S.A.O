import ReactDOM from "react-dom"
import { imgArray } from "./PhotoLists"
import { useEffect } from "react"

function Modal({ onClose, imgIndex, nextImg, previousImg }) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden")

    return () => document.body.classList.remove("overflow-hidden")
  }, [])

  console.log("imgIndex passed into Modal component", imgIndex)

  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-gray-300 opacity-80"></div>
      <div className="fixed inset-40 p-10 bg-white">
        <div className="flex flex-col justify-between h-full">
          {/* //TODO must disable buttons when the length of the array is
          // reached */}
          <button onClick={previousImg}>Previous</button>
          {imgArray[imgIndex]}
          <button onClick={nextImg}>Next</button>
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  )
}

export default Modal
