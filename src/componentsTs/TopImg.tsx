import WhiteTrimContainer from "./WhiteTrimContainer"
// @ts-ignore
import useLoading from "../hooksTs/use-Loading"
import Skeleton from "../componentsTs/Skeleton"
import { useEffect, useRef } from "react"
import photo from '../photos/banner/8-web-or-mls-Sage+Oak-8.jpg'

const TopImg = () => {
  const { isLoaded, setLoadTrue } = useLoading()
  const imgTag = useRef<HTMLImageElement>(null!)

  useEffect(() => {
    function handleScroll() {
      const containerHeight =
        (imgTag.current.parentElement as HTMLDivElement).clientHeight
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
    <WhiteTrimContainer lateralNTop>
      <div
        className="relative header_gradient ">
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
    </WhiteTrimContainer>
  )
}
export default TopImg
