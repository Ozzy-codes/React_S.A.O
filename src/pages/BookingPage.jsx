import { useEffect } from "react"
import "../components/widgetScript"
import TopImg from "../components/TopImg"
import useWidgetLoader from "../hooks/use-WidgetLoader"

export default function BookingPage() {
  const { widgetLoaded, widgetRef, widgetLoadingContent } =
    useWidgetLoader()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <TopImg />
      <div className="p-4">
        <h2 className="text-3xl py-4 mb-4">Booking and Inquiry</h2>
        <div
          className={
            "relative " + (widgetLoaded ? "" : "h-[90vh] w-full")
          }>
          <div
            className="ownerrez-widget"
            data-property-id="ad27789d5c644113b84e38dea08436de"
            data-widget-type="Booking/Inquiry"
            data-widget-id="afd5ae158721478f8a231d1f1bf4124d"
            ref={widgetRef}></div>
          {widgetLoadingContent}
        </div>
      </div>
    </div>
  )
}
