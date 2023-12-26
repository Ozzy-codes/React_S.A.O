import Skeleton from "../components/Skeleton"
import useLoading from "../hooks/use-Loading"
import { useState } from "react"

function CabinAvailability({ className }) {
  const { isLoaded, loadingRef } = useLoading()
  const [screenMd, setScreenMd] = useState(false)

  const widgetLoadingContent = isLoaded ? (
    ""
  ) : (
    <Skeleton
      times={1}
      className={"absolute inset-0"}
    />
  )

  const widgetOption = screenMd ? (
    <div
      className="ownerrez-widget"
      data-property-id="ad27789d5c644113b84e38dea08436de"
      data-widget-type="Display 3 months - Multiple Month Calendar"
      data-widget-id="feafd37a5298462c88492b3d62cef241"
      ref={loadingRef}></div>
  ) : (
    <div
      className="ownerrez-widget"
      data-property-id="ad27789d5c644113b84e38dea08436de"
      data-widget-type="Multiple Month Calendar"
      data-widget-id="cc1543b3f17d4a48bfbe78eeb50ead8b"
      ref={loadingRef}></div>
  )

  return (
    <div
      className={
        "relative " + (isLoaded ? "" : "h-[90vh] w-full " + className)
      }>
      {/* <div
        className="ownerrez-widget"
        data-property-id="ad27789d5c644113b84e38dea08436de"
        data-widget-type="Multiple Month Calendar"
        data-widget-id="cc1543b3f17d4a48bfbe78eeb50ead8b"
        ref={loadingRef}></div> */}
      {widgetOption}
      {widgetLoadingContent}
    </div>
  )
}
export default CabinAvailability
