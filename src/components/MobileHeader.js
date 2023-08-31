// optimized for 375 px width screen
import { Link } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import { FiMenu } from "react-icons/fi"
import Button from "./Button"

function MobileHeader({ header, navLinks }) {
  const [isOpen, setIsOpen] = useState(false)
  const [previousPageHeight, setPreviousPageHeight] = useState(0)
  const hiddenTimer = useRef()

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handler = (event) => {
      const top_header_div = document.querySelector("#top_header_div")
      const scrollHeight = event.target.scrollingElement.scrollTop

      if (scrollHeight - previousPageHeight > 0) {
        if (!top_header_div.classList.contains("opacity-0")) {
          hiddenTimer.current = setTimeout(() => {
            top_header_div.classList.add("hidden")
          }, 1000)
        }
        top_header_div.classList.add("opacity-0")
      } else {
        clearTimeout(hiddenTimer.current)
        top_header_div.classList.remove("hidden")
        setTimeout(() => {
          top_header_div.classList.remove("opacity-0")
        }, 200)
      }
      setPreviousPageHeight(scrollHeight)
    }
    document.addEventListener("scroll", handler)

    return () => document.removeEventListener("scroll", handler)
  }, [previousPageHeight])

  const default_Nav_styles =
    "my-4 py-2 border-b-2 hover:underline active:decoration-sky-500 active:text-sky-500 text-2xl"

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
      className={
        "absolute w-screen flex flex-col transition-all duration-1000 "
      }>
      <div className="flex z-10 justify-between p-8">
        <h1 className="text-4xl">{header}</h1>
        <button
          onClick={handleClick}
          className="text-4xl">
          <FiMenu />
        </button>
      </div>

      <div
        className={
          "w-screen relative transition-all duration-1000 " +
          (isOpen ? "left-0 opacity-100" : "left-full opacity-0")
        }>
        <div
          id="drawer_div"
          className="px-4 h-full bg-gray-100 flex flex-col justify-center text-center transition duration-1000 ">
          {renderedLinks}
          <Button
            soft_corners
            className="text-2xl border-4 mb-4">
            Book Now
          </Button>
        </div>
      </div>
    </div>
  )
}

export default MobileHeader
