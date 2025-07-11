import Skeleton from "../componentsTs/Skeleton"
// @ts-ignore
import useLoading from "../hooksTs/use-Loading"

interface BookAndInquiryProps {
  className?: string
}

const BookAndInquiry: React.FC<BookAndInquiryProps> = ({className}) => {
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
      {widgetLoadingContent}
    </div>
  )
}
export default BookAndInquiry
