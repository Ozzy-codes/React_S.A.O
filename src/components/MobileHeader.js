// optimized for 375 px width screen
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { FiMenu } from "react-icons/fi"

function MobileHeader({ header, navLinks }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handler = (event) => {
      if (event.target.scrollingElement.scrollTop > 25) {
        document
          .querySelector("#top_header_div")
          .classList.add("transition-opacity", "duration-1000", "opacity-0")
      } else {
        document
          .querySelector("#top_header_div")
          .classList.remove("transition-opacity", "duration-1000", "opacity-0")
      }
    }
    document.addEventListener("scroll", handler)

    return () => document.removeEventListener("scroll", handler)
  }, [])

  const default_Nav_styles =
    "py-2 border-b-2 hover:underline active:decoration-sky-500 active:text-sky-500"

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
      className="fixed w-full bg-gray-300 hover:opacity-100">
      <div className="flex justify-between p-4 border-b-2">
        <h1 className="text-2xl">{header}</h1>
        <button
          onClick={handleClick}
          className="text-2xl">
          <FiMenu />
        </button>
      </div>
      {isOpen && <div className="px-4 flex flex-col">{renderedLinks}</div>}
    </div>
  )
}

export default MobileHeader
