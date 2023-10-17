import "../components/widgetScript"
import { useEffect } from "react"

export default function BookingPage() {
  useEffect(() => {
    window.OwnerRez.loadDefaultWidgets()
  })

  return (
    <div>
      <img
        className="w-full"
        src="https://picsum.photos/200/?blur=1"
        alt="random img"
      />
      <div className="p-4">
        <h2 className="text-3xl py-4 mb-4">Booking and Inquiry</h2>
        <div
          className="ownerrez-widget"
          data-property-id="ad27789d5c644113b84e38dea08436de"
          data-widget-type="Booking/Inquiry"
          data-widget-id="afd5ae158721478f8a231d1f1bf4124d"></div>
      </div>
    </div>
  )
}
