import { Link } from "react-router-dom"

function DeskTopHeader({ header, navLinks }) {
  const default_Nav_styles =
    "my-4 py-2 md:my-2 md:py-1 md:text-[5vh] hover:underline active:decoration-sky-500 active:text-sky-500 text-4xl"

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
      className={
        "absolute w-screen flex flex-col items-center transition-all duration-1000 "
      }>
      <div className="flex z-20 justify-between p-8 md:pt-[4rem] md:pb-0 md:px-[4rem]">
        <Link to={"/"}>
          <h1 className="text-6xl md:text-[5rem] font-['Whisper'] text-black">
            Sage + Oak
            {/* <img
              src="https://uc.orez.io/f/6b76dd8c2b214f1db488cbc33ffd8eff"
              alt="Sage and Oak"
              className="w-20 rounded-lg"
            /> */}
          </h1>
        </Link>
      </div>
    </div>
  )
}
export default DeskTopHeader
