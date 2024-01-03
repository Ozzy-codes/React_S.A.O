import useLoading from "../hooks/use-Loading"
import Skeleton from "../components/Skeleton"
import { useEffect, useRef } from "react"

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
        imgTag.current.style.transform = `translateY(${
          -window.scrollY / 2
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
    <div className={"relative header_gradient h-[750px] z-[-5] "}>
      <img
        className="w-full "
        src="https://picsum.photos/200/?blur=1"
        alt="random img"
        width={200}
        height={200}
        onLoad={setLoadTrue}
        ref={imgTag}
      />
      {loadingContent}
    </div>
  )
}
export default TopImg
