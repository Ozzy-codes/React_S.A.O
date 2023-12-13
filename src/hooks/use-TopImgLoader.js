import { useState } from "react"

function useTopImgLoader() {
  const [isLoaded, setIsLoaded] = useState(false)

  function setLoadTrue() {
    console.log("img is loaded")
    setIsLoaded(true)
  }
  const loadingContent = isLoaded ? (
    ""
  ) : (
    <div className="flex justify-center items-center absolute inset-0">
      Currently Loading...
    </div>
  )
  return {
    isLoaded,
    setLoadTrue,
    loadingContent
  }
}
export default useTopImgLoader
