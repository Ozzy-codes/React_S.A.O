import TopImg from "../componentsTs/TopImg"
import CabinAvailability from "../componentsTs/CabinAvailability"
import { useEffect } from "react"

const AvailabilityPage = () => {
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
export default AvailabilityPage
