import ReactDOM from "react-dom"
import { imgArray } from "./PhotoLists"
import { FaCircleChevronLeft } from "react-icons/fa6"
import { FaCircleChevronRight } from "react-icons/fa6"
import { useEffect } from "react"
import CloseButton from "./CloseButton"

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
      <button
        className="z-40 text-4xl text-gray-500 fixed left-[.5rem] top-1/2 -translate-y-2/4 py-[1rem] pr-[1rem]"
        onClick={previousImg}>
        <FaCircleChevronLeft />
      </button>
      <div className="z-30 fixed inset-2/4 -translate-x-2/4 -translate-y-2/4 bg-white w-fit h-fit max-w-[95%] max-h-[85%]">
        {/* //TODO must disable buttons when the length of the array is
          // reached */}
        <CloseButton />
        <div
          onClick={nextImg}
          className="cursor-pointer">
          {imgArray[imgIndex]}
        </div>
      </div>
      <button
        className="z-40 text-4xl text-gray-500 fixed right-[.5rem] top-1/2 -translate-y-2/4 py-[1rem] pl-[1rem]"
        onClick={nextImg}>
        <FaCircleChevronRight />
      </button>
    </div>,
    document.querySelector(".modal-container")
  )
}

export default Modal
