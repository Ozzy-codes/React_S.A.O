import ReactDOM from "react-dom"
import { FaChevronLeft } from "react-icons/fa6"
import { FaChevronRight } from "react-icons/fa6"
import { IoClose } from "react-icons/io5"
import { useEffect } from "react"

function Modal({
  onClose,
  imgIndex,
  nextImg,
  previousImg,
  listOfImgs
}) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden")

    return () => document.body.classList.remove("overflow-hidden")
  }, [])

  console.log("imgIndex passed into Modal component", imgIndex)

  const btnStyle =
    "z-40 text-4xl text-gray-300 fixed top-1/2 -translate-y-2/4 py-[1rem] "
  const disablePreviousBtn = imgIndex < 1 ? true : false
  const disableNextBtn =
    imgIndex === listOfImgs.length - 1 ? true : false

  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className="z-20 fixed inset-0 bg-black opacity-80 cursor-zoom-out"></div>
      <button
        disabled={disablePreviousBtn}
        className={
          btnStyle +
          " left-[.5rem] pr-[1rem] " +
          (disablePreviousBtn ? "opacity-20" : "opacity-70")
        }
        onClick={previousImg}>
        <FaChevronLeft />
      </button>
      <div className="flex z-30 fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 bg-white max-w-[95vw] max-h-[85vh]">
        <button
          className="fixed right-0 -translate-y-full text-gray-300 text-4xl"
          onClick={onClose}>
          <IoClose />
        </button>
        <button
          disabled={disableNextBtn}
          onClick={nextImg}
          className={
            "w-max max-h-[85vh] " +
            (disableNextBtn ? "" : "cursor-pointer")
          }>
          {/*  TODO: img is currently stretching, considering to maintain aspect ratio of img. */}
          <img
            src={listOfImgs[imgIndex].imgUrl}
            alt="picsum test"
            width={listOfImgs[imgIndex].imgWidth}
            height={listOfImgs[imgIndex].imgHeight}
            className="h-full"
          />
        </button>
        <div className="fixed z-40 right-0 bottom-0 text-gray-300 translate-y-full">
          {imgIndex + 1} of {listOfImgs.length}
        </div>
      </div>
      <button
        disabled={disableNextBtn}
        className={
          btnStyle +
          " right-[.5rem] pl-[1rem] " +
          (disableNextBtn ? "opacity-20" : "opacity-70")
        }
        onClick={nextImg}>
        <FaChevronRight />
      </button>
    </div>,
    document.querySelector(".modal-container")
  )
}

export default Modal
