import "../components/widgetScript"
import useTopImgLoader from "../hooks/use-TopImgLoader"
import Skeleton from "../components/Skeleton"
import { useEffect, useRef, useState } from "react"

export default function BookingPage() {
  const { isLoaded, setLoadTrue, loadingContent } = useTopImgLoader()
  const [widgetLoaded, setWidgetLoaded] = useState(false)

  const targetRef = useRef(null)

  useEffect(() => {
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === "childList") {
          //children of target have changed
          // you are now free to perform actions here
          console.log("children have been added or removed")
          const addedNodes = mutation.addedNodes
          addedNodes.forEach((node) => {
            if (node instanceof HTMLIFrameElement) {
              //an iframe has been added
              // attach an onload event listener to it.
              node.onload = () => {
                // we can perform actions here.
                console.log("iframe content is loaded")
                setWidgetLoadTrue()
              }
            }
          })
        }
      }
    })
    const config = { childList: true }
    const targetNode = targetRef.current

    if (targetNode) observer.observe(targetNode, config)
    //clean up of observer when compt unmounts
    window.OwnerRez.loadDefaultWidgets()
    return () => observer.disconnect()
  }, [])

  function setWidgetLoadTrue() {
    console.log("handle widget load triggered")
    setWidgetLoaded(true)
  }

  const widgetLoadingContent = widgetLoaded ? (
    ""
  ) : (
    <Skeleton
      times={1}
      className={"absolute inset-0"}
    />
  )

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
          className={
            "relative " + (widgetLoaded ? "" : "h-[90vh] w-full")
          }>
          <div
            className="ownerrez-widget"
            data-property-id="ad27789d5c644113b84e38dea08436de"
            data-widget-type="Booking/Inquiry"
            data-widget-id="afd5ae158721478f8a231d1f1bf4124d"
            ref={targetRef}></div>
          {widgetLoadingContent}
        </div>
      </div>
    </div>
  )
}
