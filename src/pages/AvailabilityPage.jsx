import TopImg from "../components/TopImg"
import CabinAvailability from "../components/CabinAvailability"
import { useEffect } from "react"

export default function AvailabilityPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <TopImg />
      <div className="p-4 bg-white ">
        <h2 className="text-3xl py-4 mb-4">Availability</h2>
        <CabinAvailability />
      </div>
    </div>
  )
}
