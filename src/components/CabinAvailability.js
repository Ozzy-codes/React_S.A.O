import Skeleton from "../components/Skeleton"
import useLoading from "../hooks/use-Loading"

function CabinAvailability({ className }) {
  const { isLoaded, loadingRef } = useLoading()

  const widgetLoadingContent = isLoaded ? (
    ""
  ) : (
    <Skeleton
      times={1}
      className={"absolute inset-0"}
    />
  )

  return (
    <div
      className={
        "relative " + (isLoaded ? "" : "h-[90vh] w-full " + className)
      }>
      <div
        className="ownerrez-widget"
        data-property-id="ad27789d5c644113b84e38dea08436de"
        data-widget-type="Multiple Month Calendar"
        data-widget-id="cc1543b3f17d4a48bfbe78eeb50ead8b"
        ref={loadingRef}></div>
      {widgetLoadingContent}
    </div>
  )
}
export default CabinAvailability
