import "../components/widgetScript"
import { useEffect } from "react"
import useTopImgLoader from "../hooks/use-TopImgLoader"

export default function BookingPage() {
  const { isLoaded, setLoadTrue, loadingContent } = useTopImgLoader()
  useEffect(() => {
    window.OwnerRez.loadDefaultWidgets()
  })

  return (
    <div>
      <div
        className={"relative " + (isLoaded ? "" : "h-[65vh] w-full")}>
        <img
          className="w-full"
          src="https://picsum.photos/200/?blur=1"
          alt="random img"
          onLoad={setLoadTrue}
        />
        {loadingContent}
      </div>
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
