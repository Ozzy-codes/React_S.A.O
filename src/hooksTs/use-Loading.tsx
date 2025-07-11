import { useState, useEffect, useRef } from "react"

const useLoading = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const loadingRef = useRef(null)

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://app.ownerrez.com/widget.js"
    document.body.appendChild(script);

    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === "childList") {
          //children of target have changed
          // you are now free to perform actions here
          const addedNodes = mutation.addedNodes
          addedNodes.forEach((node) => {
            if (node instanceof HTMLIFrameElement) {
              //an iframe has been added
              // attach an onload event listener to it.
              node.onload = () => {
                // we can perform actions here.
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
    }
    //clean up of observer when compt unmounts
    return () => {
      observer.disconnect()
      document.body.removeChild(script);
    }
  }, [])

  function setLoadTrue() {
    setIsLoaded(true)
  }

  return {
    isLoaded,
    loadingRef,
    setLoadTrue
  }
}
export default useLoading
