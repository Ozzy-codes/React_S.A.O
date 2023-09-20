import ReactDOM from "react-dom"
import { imgArray } from "./PhotoLists"
import { useEffect } from "react"

function Modal({ onClose, imgIndex, nextImg, previousImg }) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden")

    return () => document.body.classList.remove("overflow-hidden")
  }, [])

  console.log("imgIndex passed into Modal component", imgIndex)

  const disablePreviousBtn = imgIndex < 1 ? true : false
  const disableNextBtn =
    imgIndex === imgArray.length - 1 ? true : false

  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className="z-20 fixed inset-0 bg-gray-300 opacity-80"></div>
      <div className="z-30 fixed inset-40 p-10 bg-white">
        <div className="flex flex-col justify-between h-full">
          {/* //TODO must disable buttons when the length of the array is
          // reached */}
          <button
            disabled={disablePreviousBtn}
            onClick={previousImg}
            className={
              disablePreviousBtn ? "opacity-50" : "opacity-100"
            }>
            Previous
          </button>
          {imgArray[imgIndex]}
          <button
            disabled={disableNextBtn}
            onClick={nextImg}
            className={disableNextBtn ? "opacity-50" : "opacity-100"}>
            Next
          </button>
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  )
}

export default Modal
