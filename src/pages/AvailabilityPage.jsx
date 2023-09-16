// import "../components/widgetScript"
import { useEffect } from "react"

export default function AvailabilityPage() {
  useEffect(() => {
    // window.OwnerRez.loadDefaultWidgets()
  })

  return (
    <div>
      <img
        className="w-full"
        src="https://picsum.photos/200"
        alt="random img"
      />
      <div className="p-4">
        <h2 className="text-3xl py-4 mb-4">Availability</h2>
      </div>
    </div>
  )
}
