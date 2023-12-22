import { useState, useEffect, useRef } from "react"
import "../components/widgetScript"

function useLoading() {
  const [isLoaded, setIsLoaded] = useState(false)
  const loadingRef = useRef(null)

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
                setLoadTrue()
              }
            }
          })
        }
      }
    })
    const config = { childList: true }
    const widgetNode = loadingRef.current

    if (widgetNode) {
      observer.observe(widgetNode, config)
      //clean up of observer when compt unmounts
      window.OwnerRez.loadDefaultWidgets()
    }
    return () => observer.disconnect()
  }, [])

  function setLoadTrue() {
    console.log("handle widget load triggered")
    setIsLoaded(true)
  }

  return {
    isLoaded,
    loadingRef,
    setLoadTrue
  }
}
export default useLoading
