// @ts-ignore
import useLoading from "../hooksTs/use-Loading"
import Skeleton from "../componentsTs/Skeleton"

interface SingleMonthViewProps {
  className?: string
}

const SingleMonthView: React.FC<SingleMonthViewProps> = ({ className }) => {
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
        data-propertyId="ad27789d5c644113b84e38dea08436de"
        data-widget-type="Multiple Month Calendar"
        data-widgetId="cc1543b3f17d4a48bfbe78eeb50ead8b"
        ref={loadingRef}></div>
      {widgetLoadingContent}
    </div>
  )
}
export default SingleMonthView
