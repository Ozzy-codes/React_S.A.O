import { Link } from "react-router-dom"
import Button from "./Button"

function DeskTopHeader({ header, navLinks }) {
  const default_Nav_styles =
    "my-2 py-1 text-[2rem] hover:underline active:decoration-sky-500 active:text-sky-500 "

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
      className={"absolute w-screen flex flex-col items-center "}>
      <div className="z-20 pt-[4rem] pb-0 px-[4rem]">
        <Link to={"/"}>
          <h1 className="leading-none text-[5rem] font-['Whisper'] text-black">
            Sage + Oak
            {/* <img
              src="https://uc.orez.io/f/6b76dd8c2b214f1db488cbc33ffd8eff"
              alt="Sage and Oak"
              className="w-20 rounded-lg"
            /> */}
          </h1>
        </Link>
      </div>
      <div
        id="drawer_div"
        className="z-20 w-full bg-transparent flex justify-evenly text-center ">
        {renderedLinks}
        <Link
          to={"booking"}
          className="">
          <Button
            soft_corners
            className="w-full leading-[2.25rem] text-[2rem] p-4 bg-transparent border-0 underline text-[darkGreen] ">
            Book Now
          </Button>
        </Link>
      </div>
    </div>
  )
}
export default DeskTopHeader
