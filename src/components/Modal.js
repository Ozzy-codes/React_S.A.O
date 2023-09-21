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
        className="z-20 fixed inset-0 bg-gray-300 opacity-80 cursor-zoom-out"></div>
      <div className="z-30 fixed inset-2/4 -translate-x-2/4 -translate-y-2/4 bg-white w-fit h-fit max-w-[95%] max-h-[85%]">
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
