// optimized for 375 px width screen
import { Link } from "react-router-dom"
import { useState } from "react"
import HamburgerMenu from "./HamburgerMenu"
import Button from "./Button"

function MobileHeader({ header, navLinks }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    document.body.classList.toggle("overflow-hidden")
    setIsOpen(!isOpen)
  }

  const default_Nav_styles =
    "my-4 py-2 hover:underline active:decoration-sky-500 active:text-sky-500 text-4xl"

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
        <h1 className="text-4xl">
          <img
            src="https://uc.orez.io/f/6b76dd8c2b214f1db488cbc33ffd8eff"
            alt="Sage and Oak"
            className="w-20"
          />
        </h1>
        <button
          onClick={handleClick}
          className="text-4xl">
          <HamburgerMenu handleClick={isOpen} />
        </button>
      </div>

      <div
        className={
          "w-screen h-screen fixed transition-all duration-1000 " +
          (isOpen
            ? "inset-0 opacity-100 visible"
            : "left-full opacity-0 invisible")
        }>
        <div
          id="drawer_div"
          className="px-4 h-[100dvh] pt-[8rem] bg-gray-100 flex flex-col justify-evenly text-center transition duration-1000 ">
          {renderedLinks}
          <Button
            soft_corners
            className="text-3xl border-4 mb-4">
            Book Now
          </Button>
        </div>
      </div>
    </div>
  )
}

export default MobileHeader
