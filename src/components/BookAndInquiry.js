import Skeleton from "../components/Skeleton"
import useLoading from "../hooks/use-Loading"

function BookAndInquiry({ className }) {
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
        "relative " + (isLoaded ? "" : "h-[90vh] w-full ") + className
      }>
      <div
        className="ownerrez-widget"
        data-propertyId="ad27789d5c644113b84e38dea08436de"
        data-widget-type="Booking/Inquiry"
        data-widgetId="afd5ae158721478f8a231d1f1bf4124d"
        ref={loadingRef}></div>
      <script src="https://app.ownerrez.com/widget.js" />
      {widgetLoadingContent}
    </div>
  )
}
export default BookAndInquiry
