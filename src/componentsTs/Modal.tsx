import ReactDOM from "react-dom"
import { FaChevronLeft } from "react-icons/fa6"
import { FaChevronRight } from "react-icons/fa6"
import { IoClose } from "react-icons/io5"
import { useEffect } from "react"
import { testImgType } from "../pagesTs/PhotoPage"

interface ModalProps {
  onClose: () => void,
  imgIndex: number,
  nextImg: () => void,
  previousImg: () => void,
  listOfImgs: testImgType
}

const Modal: React.FC<ModalProps> = (
  {
    onClose,
    imgIndex,
    nextImg,
    previousImg,
    listOfImgs
  }) => {

  useEffect(() => {
    document.body.classList.add("overflow-hidden")
    const leftBtn = document.getElementById("previousButton")
    const rightBtn = document.getElementById("nextButton")
    let touchStart = 0
    let touchEnd = 0
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") rightBtn?.click()
      else if (event.key === "ArrowLeft") leftBtn?.click()
    }
    const handleTouchStart = (event: TouchEvent) => {
      touchStart = event.touches[0].clientX
    }
    const handleTouchEnd = (event: TouchEvent) => {
      touchEnd = event.changedTouches[0].clientX
      if (Math.abs(touchEnd - touchStart) > 50) {
        console.log("swipe meets width criteria")
        if (touchEnd - touchStart < 0) rightBtn?.click()
        if (touchEnd - touchStart > 0) leftBtn?.click()
      }
    }
    document.addEventListener("keydown", handleKeyPress)
    document.addEventListener("touchstart", handleTouchStart)
    document.addEventListener("touchend", handleTouchEnd)
    return () => {
      document.removeEventListener("keydown", handleKeyPress)
      document.removeEventListener("touchstart", handleTouchStart)
      document.removeEventListener("touchend", handleTouchEnd)
      document.body.classList.remove("overflow-hidden")
    }
  }, [nextImg, previousImg])

  const btnStyle =
    "z-40 text-4xl text-gray-300 fixed top-1/2 -translate-y-2/4 "
  const disablePreviousBtn = imgIndex < 1 ? true : false
  const disableNextBtn =
    imgIndex === listOfImgs.length - 1 ? true : false

  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className="z-20 fixed inset-0 bg-black opacity-80 cursor-zoom-out"></div>
      <button
        id="previousButton"
        disabled={disablePreviousBtn}
        className={
          btnStyle +
          " left-[.5rem] VerticalBtnPadding py-[17%] pr-[5%] " +
          (disablePreviousBtn ? "opacity-20" : "opacity-70")
        }
        onClick={previousImg}>
        <FaChevronLeft />
      </button>
      <div className="flex z-30 fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-[95vw] justify-center bg-transparent max-h-[75vh]">
        <div className="fixed z-40 left-0 text-gray-300 -translate-y-[110%] text-2xl">
          {imgIndex + 1} of {listOfImgs.length}
        </div>
        <button
          className="fixed right-0 -translate-y-full text-gray-300 text-4xl"
          onClick={onClose}>
          <IoClose />
        </button>
        <button
          id="nextButton"
          disabled={disableNextBtn}
          onClick={nextImg}
          className={
            (disableNextBtn ? "" : "cursor-pointer")
          }>
          <img
            src={listOfImgs[imgIndex].imgUrl}
            alt={listOfImgs[imgIndex].altText}
            width={listOfImgs[imgIndex].imgWidth}
            height={listOfImgs[imgIndex].imgHeight}
            className="h-full"
          />
        </button>
      </div>
      {/* adjust padding for */}
      <button
        disabled={disableNextBtn}
        className={
          btnStyle +
          " right-[.5rem] VerticalBtnPadding py-[17%] pl-[5%] " +
          (disableNextBtn ? "opacity-20" : "opacity-70")
        }
        onClick={nextImg}>
        <FaChevronRight />
      </button>
    </div >,
    document.querySelector(".modal-container") as HTMLDivElement
  )
}

export default Modal
