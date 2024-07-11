import { useState, useEffect } from "react"

const useResize = (minWidth: number) => {
  const [nextViewPort, setNextViewPort] = useState(false)

  useEffect(() => {
    if (window.innerWidth >= minWidth) setNextViewPort(true)
    else setNextViewPort(false)

    const handleResize = () => {
      if (window.innerWidth >= minWidth) setNextViewPort(true)
      else setNextViewPort(false)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [minWidth])

  return { nextViewPort }
}
export default useResize
