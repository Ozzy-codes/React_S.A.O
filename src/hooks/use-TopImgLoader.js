import { useState } from "react"

function useTopImgLoader() {
  const [isLoaded, setIsLoaded] = useState(false)

  function setLoadTrue() {
    console.log("img is loaded")
    setIsLoaded(true)
  }

  return {
    isLoaded,
    setLoadTrue
  }
}
export default useTopImgLoader
