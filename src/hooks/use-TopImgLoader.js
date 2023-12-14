import { useState } from "react"
import Skeleton from "../components/Skeleton"

function useTopImgLoader() {
  const [isLoaded, setIsLoaded] = useState(false)

  function setLoadTrue() {
    console.log("img is loaded")
    setIsLoaded(true)
  }
  const loadingContent = isLoaded ? (
    ""
  ) : (
    <Skeleton
      times={1}
      className={"absolute inset-0"}
    />
  )
  return {
    isLoaded,
    setLoadTrue,
    loadingContent
  }
}
export default useTopImgLoader
