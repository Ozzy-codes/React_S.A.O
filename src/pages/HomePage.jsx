import { useEffect } from "react"

export default function HomePage() {
  useEffect(() => {
    let timer
    const rotateTimer = () => {
      console.log("display first photo")
      timer = setInterval(() => {
        console.log("Rotate new photo in")
      }, 3000)
    }
    rotateTimer()

    return () => {
      clearInterval(timer)
    }
  }, [])

  return <div>Home Page</div>
}
