import useLoading from "../hooks/use-Loading"
import Skeleton from "../components/Skeleton"
import { useEffect, useRef } from "react"
import photo from '../photos/banner/1-web-or-mls-Sage+Oak-1.jpg'

function TopImg() {
  const { isLoaded, setLoadTrue } = useLoading()
  const imgTag = useRef(null)

  useEffect(() => {
    function handleScroll() {
      const containerHeight =
        imgTag.current.parentElement.clientHeight
      const imgHeight = imgTag.current.height
      const imgHeightDiff = imgHeight - containerHeight
      if (window.scrollY <= imgHeightDiff) {
        imgTag.current.style.transform = `translateY(${-window.scrollY / 2
          }px)`
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const loadingContent = isLoaded ? (
    ""
  ) : (
    <Skeleton
      times={1}
      className={"absolute inset-0"}
    />
  )

  return (
    <div
      className="relative header_gradient lg:h-[750px] lg:z-[-5] ">
      <img
        className="w-full "
        src={photo}
        alt="Front Arial view of Cabin"
        width={2048}
        height={1364}
        onLoad={setLoadTrue}
        ref={imgTag}
      />
      {loadingContent}
    </div>
  )
}
export default TopImg
