import Skeleton from "./Skeleton"
// @ts-ignore
import useLoading from "../hooksTs/use-Loading"

interface GoolgeMapProps {
  className?: string
}

const GoogleMap: React.FC<GoolgeMapProps> = () => {
  const { isLoaded, setLoadTrue } = useLoading()

  const widgetLoadingContent = isLoaded ? (
    ""
  ) : (
    <Skeleton
      times={1}
      className={"absolute inset-0"}
    />
  )

  // TODO: add img on desktop not on mobile - add to the right side of map
  return (
    <div className="bg-white">
      <div
        className={"relative " + (isLoaded ? "" : "h-[90%] w-full")}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.274167456993!2d-83.6046403246361!3d35.74406547256694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f125.1!3m3!1m2!1s0x885eab89d3aaece9%3A0xc272ce6478e3f4dc!2sSage%20%2B%20Oak%20Cabin!5e0!3m2!1sen!2sid!4v1694040788912!5m2!1sen!2sid"
          title="map"
          width="600"
          height="450"
          style={{ border: "0" }}
          loading="lazy"
          className="w-full"
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={setLoadTrue}></iframe>
        {widgetLoadingContent}
      </div>
    </div>
  )
}
export default GoogleMap
