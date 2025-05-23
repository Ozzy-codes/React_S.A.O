// @ts-ignore
import useLoading from "../hooksTs/use-Loading"
import Skeleton from "../componentsTs/Skeleton"

interface ThreeMonthViewProps {
  className?: string
}

const ThreeMonthView: React.FC<ThreeMonthViewProps> = ({ className }) => {
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
        data-widget-type="Display 3 months - Multiple Month Calendar"
        data-widgetId="feafd37a5298462c88492b3d62cef241"
        ref={loadingRef}></div>
      {widgetLoadingContent}
    </div>
  )
}
export default ThreeMonthView
