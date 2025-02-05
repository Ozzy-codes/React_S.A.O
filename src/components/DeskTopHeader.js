import { Link } from "react-router-dom"
import Button from "./Button"

function DeskTopHeader({ navLinks }) {
  const default_Nav_styles =
    "my-2 py-1 w-full text-[1.5rem] text-white font-thin hover:underline hover:font-normal active:decoration-sky-500 active:text-sky-500 "

  const renderedLinks = navLinks.map((page, index) => {
    if (index === 0) {
      return (
        <Link
          key={index}
          to={"/"}
          className={default_Nav_styles}>
          {page}
        </Link>
      )
    } else {
      return (
        <Link
          key={index}
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
      className={"bg-[var(--logo-color)] w-screen flex flex-col items-center "}>
      <div className="z-20 pt-[4rem] pb-0 px-[4rem] md:p-[1rem]">
        <Link to={"/"}>
          <h1 className="leading-none text-[5rem] text-white">
            <span>
              Sage + Oak
            </span>
            <span className="pl-4 md:pl-8">
              Cabin
            </span>
          </h1>
        </Link>
      </div>
      <div
        id="drawer_div"
        className="z-20 w-full bg-transparent flex justify-evenly items-center text-center ">
        {renderedLinks}
        <Link
          to={"booking"}
          className="contents">
          <Button
            className="w-full text-[1.5rem] bg-transparent border-0 hover:underline ">
            Book Now
          </Button>
        </Link>
      </div>
    </div>
  )
}
export default DeskTopHeader
