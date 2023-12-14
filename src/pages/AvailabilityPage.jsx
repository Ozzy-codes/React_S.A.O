import "../components/widgetScript"
import useTopImgLoader from "../hooks/use-TopImgLoader"
import useWidgetLoader from "../hooks/use-WidgetLoader"
import { useEffect } from "react"

export default function AvailabilityPage() {
  const { isLoaded, setLoadTrue, loadingContent } = useTopImgLoader()
  const { widgetLoaded, widgetRef, widgetLoadingContent } =
    useWidgetLoader()

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
        <h2 className="text-3xl py-4 mb-4">Availability</h2>
        <div
          className={
            "relative " + (widgetLoaded ? "" : "h-[90vh] w-full")
          }>
          <div
            className="ownerrez-widget"
            data-property-id="ad27789d5c644113b84e38dea08436de"
            data-widget-type="Multiple Month Calendar"
            data-widget-id="cc1543b3f17d4a48bfbe78eeb50ead8b"
            ref={widgetRef}></div>
          {widgetLoadingContent}
        </div>
      </div>
    </div>
  )
}
