import SingleMonthView from "./SingleMonthView"
import ThreeMonthView from "./ThreeMonthView"
import { useState, useEffect } from "react"

function CabinAvailability({ className }) {
  const [screenMd, setScreenMd] = useState(false)

  useEffect(() => {
    if (window.innerWidth >= 768) setScreenMd(true)
    else setScreenMd(false)

    const handleResize = () => {
      if (window.innerWidth >= 768) setScreenMd(true)
      else setScreenMd(false)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const widgetOption = screenMd ? (
    <ThreeMonthView className={className} />
  ) : (
    <SingleMonthView className={className} />
  )

  return <>{widgetOption}</>
}
export default CabinAvailability
