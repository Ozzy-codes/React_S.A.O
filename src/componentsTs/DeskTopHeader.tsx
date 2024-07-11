import { Link } from "react-router-dom"
import Button from "./Button"

interface DeskTopHeaderProps {
  navLinks: string[]
}

const DeskTopHeader: React.FC<DeskTopHeaderProps> = ({ navLinks }) => {
  const default_Nav_styles =
    "my-2 py-1 text-[2rem] text-white hover:underline active:decoration-sky-500 active:text-sky-500 "

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
      className={"absolute w-screen flex flex-col items-center bg-[var(--light-logo)] "}>
      <div className="z-20 pt-[4rem] pb-0 px-[4rem]">
        <Link to={"/"}>
          <h1 className="leading-none text-[5rem] font-['Whisper'] text-white">
            <span>
              Sage+Oak
            </span>
            <span className="pl-4 md:pl-8">
              Cabin
            </span>
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
            className="w-full text-[2rem] bg-transparent border-0 underline">
            Book Now
          </Button>
        </Link>
      </div>
    </div>
  )
}
export default DeskTopHeader
