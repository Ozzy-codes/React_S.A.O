import "../components/widgetScript"
import useTopImgLoader from "../hooks/use-TopImgLoader"
import useWidgetLoader from "../hooks/use-WidgetLoader"
import { useEffect } from "react"

export default function ReviewPage() {
  const { isLoaded, setLoadTrue, loadingContent } = useTopImgLoader()
  const { widgetLoaded, widgetRef, widgetLoadingContent } =
    useWidgetLoader()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
        <h2 className="text-3xl py-4 mb-4">Reviews</h2>
        <div
          className={
            "relative " + (widgetLoaded ? "" : "h-[90vh] w-full")
          }>
          <div
            className="ownerrez-widget"
            data-widget-type="Reviews"
            data-widget-id="8a125fd30fad44ef8ae744fa28121db2"
            ref={widgetRef}></div>
          {widgetLoadingContent}
        </div>
      </div>
    </div>
  )
}
