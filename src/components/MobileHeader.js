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
  const handleBannerClick = () => {
    if (isOpen) {
      document.body.classList.remove("overflow-hidden")
      setIsOpen(!isOpen)
    }
  }

  const default_Nav_styles =
    "my-4 py-2 hover:underline active:decoration-sky-500 active:text-sky-500 text-4xl"

  const renderedLinks = navLinks.map((page, index) => {
    if (index === 0) {
      return (
        <Link
          key={index}
          onClick={handleClick}
          to={"/"}
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
      <div className="flex z-20 justify-between p-8">
        <Link
          to={"/"}
          onClick={handleBannerClick}>
          <h1 className="text-5xl font-['Whisper'] text-black">
            Sage + Oak
            {/* <img
              src="https://uc.orez.io/f/6b76dd8c2b214f1db488cbc33ffd8eff"
              alt="Sage and Oak"
              className="w-20 rounded-lg"
            /> */}
          </h1>
        </Link>
        <button
          onClick={handleClick}
          className="text-4xl">
          <HamburgerMenu
            handleClick={isOpen}
            menuColor={"black"}
          />
        </button>
      </div>

      <div
        className={
          "w-screen h-screen fixed z-10 transition-all duration-1000 " +
          (isOpen
            ? "inset-0 opacity-100 visible"
            : "left-full opacity-0 invisible")
        }>
        <div
          id="drawer_div"
          className="px-4 h-[100dvh] pt-[8rem] bg-gray-100 flex flex-col justify-evenly text-center transition duration-1000 ">
          {renderedLinks}
          <Link
            to={"booking"}
            className="mx-4"
            onClick={handleClick}>
            <Button
              soft_corners
              className="w-full text-3xl py-4">
              Book Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MobileHeader
