// optimized for 375 px width screen
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { FiMenu } from "react-icons/fi"
import Button from "./Button"

function MobileHeader({ header, navLinks }) {
  const [isOpen, setIsOpen] = useState(false)
  const [previousPageHeight, setPreviousPageHeight] = useState(0)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handler = (event) => {
      const top_header_div = document.querySelector("#top_header_div")
      const scrollHeight = event.target.scrollingElement.scrollTop

      if (scrollHeight - previousPageHeight > 0) {
        top_header_div.classList.add(
          "transition-opacity",
          "duration-1000",
          "opacity-0"
        )
      } else {
        top_header_div.classList.remove(
          "transition-opacity",
          "duration-1000",
          "opacity-0"
        )
      }
      setPreviousPageHeight(scrollHeight)
    }
    document.addEventListener("scroll", handler)

    return () => document.removeEventListener("scroll", handler)
  }, [previousPageHeight])

  const default_Nav_styles =
    "my-4 py-2 border-b-2 hover:underline active:decoration-sky-500 active:text-sky-500 text-2xl"

  const openStyle = isOpen
    ? "fixed w-screen h-screen flex flex-col bg-gray-100 hover:opacity-100"
    : "fixed w-screen flex flex-col bg-gray-100 hover:opacity-100"

  const renderedLinks = navLinks.map((page, index) => {
    if (index === 0) {
      return (
        <Link
          key={index}
          onClick={handleClick}
          to={`/`}
          className={default_Nav_styles}>
          {page}
        </Link>
      )
    } else {
      return (
        <Link
          key={index}
          onClick={handleClick}
          to={page}
          className={default_Nav_styles}>
          {page}
        </Link>
      )
    }
  })

  return (
    <div
      id="top_header_div"
      className={openStyle}>
      <div className="flex justify-between p-4 border-b-2">
        <h1 className="text-2xl">{header}</h1>
        <button
          onClick={handleClick}
          className="text-2xl">
          <FiMenu />
        </button>
      </div>
      {isOpen && (
        <div className="px-4 h-full flex flex-col justify-center text-center">
          {renderedLinks}
          <Button
            rounded
            className="text-2xl border-4 my-4">
            Book Now
          </Button>
        </div>
      )}
    </div>
  )
}

export default MobileHeader
