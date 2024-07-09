// optimized for 375 px width screen
import "../css/MobileHeader.css"
import { Link } from "react-router-dom"
import { useState } from "react"
import HamburgerMenu from "./HamburgerMenu"
import Button from "./Button"

function MobileHeader({ navLinks }) {
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
    "my-4 py-2 md:my-2 md:py-1 md:text-[5vh] hover:underline active:decoration-sky-500 active:text-sky-500 text-4xl"

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
        "sticky z-10 top-0 shadow-header w-screen flex flex-col transition-all duration-1000 "
      }>
      <div className="flex z-20 justify-around py-8 md:py-12 bg-[var(--logo-color)]">
        <Link
          to={"/"}
          onClick={handleBannerClick}>
          <h1 className="text-5xl text-white md:text-[5rem] font-['Whisper'] ">
            <span>
              Sage+Oak
            </span>
            <span className="pl-4 md:pl-8">
              Cabin
            </span>
          </h1>
        </Link>
        <button
          onClick={handleClick}
          className="text-4xl  " aria-label="Navigation Menu">
          <HamburgerMenu
            handleClick={isOpen}
            menuColor={"white"}
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
        <nav
          id="drawer_div"
          className="px-4 pt-[8rem] pb-[15%] md:pb-[1rem] md:pt-[9rem] h-[100dvh] bg-gray-100 flex flex-col justify-evenly text-center transition duration-1000 ">
          {renderedLinks}
          <Link
            to={"booking"}
            className="mx-4 md:mx-[10%]"
            onClick={handleClick}>
            <Button
              soft_corners
              className="w-full text-3xl bg-[var(--dry-grass)] md:text-[5vh] py-4 md:p-6 ">
              Book Now
            </Button>
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default MobileHeader
