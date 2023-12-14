import { useState, useEffect, useRef } from "react"
import Skeleton from "../components/Skeleton"

function useWidgetLoader() {
  const [widgetLoaded, setWidgetLoaded] = useState(false)
  const widgetRef = useRef(null)

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
    const widgetNode = widgetRef.current

    if (widgetNode) observer.observe(widgetNode, config)
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
  return {
    widgetLoaded,
    widgetRef,
    widgetLoadingContent
  }
}
export default useWidgetLoader
