import "../components/widgetScript"
import { useEffect } from "react"

export default function AvailabilityPage() {
  useEffect(() => {
    window.OwnerRez.loadDefaultWidgets()
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
        <div
          className="ownerrez-widget"
          data-property-id="ad27789d5c644113b84e38dea08436de"
          data-widget-type="Multiple Month Calendar"
          data-widget-id="cc1543b3f17d4a48bfbe78eeb50ead8b"></div>
      </div>
    </div>
  )
}
