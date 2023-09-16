import "../components/widgetScript"
import { useEffect } from "react"

export default function ReviewPage() {
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
        <h2 className="text-3xl py-4 mb-4">Reviews</h2>
        <div
          className="ownerrez-widget"
          data-widget-type="Reviews"
          data-widget-id="8a125fd30fad44ef8ae744fa28121db2"></div>
      </div>
    </div>
  )
}
