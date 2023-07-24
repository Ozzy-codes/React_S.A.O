// import { useEffect } from "react"
import FeatureAccordion from "../components/FeatureAccordion"

export default function HomePage() {
  // useEffect(() => {
  //   let timer
  //   const rotateTimer = () => {
  //     console.log("display first photo")
  //     timer = setInterval(() => {
  //       console.log("Rotate new photo in")
  //     }, 3000)
  //   }
  //   rotateTimer()

  //   return () => {
  //     clearInterval(timer)
  //   }
  // }, [])

  return (
    <div>
      <img
        className="w-full"
        src="https://picsum.photos/200"
        alt="random img"
      />
      <p className="m-4">
        Welcome to Sage and Oak Cabin, your very own secluded oasis with
        breathtaking views! This beautiful, custom-built 3000 sq foot cabin is
        nestled atop its own hill in the peaceful side of the Smokies,
        surrounded by the woods, giving you all of the privacy you will need for
        a relaxing retreat.
      </p>
      <p className="m-4">
        Blending rustic and modern elements, you will surely feel that you have
        escaped from your everyday life. Clean and crisp sheets, cozy throw
        blankets, fresh mountain air, a relaxing hot tub, and carefully curated
        decor will stimulate all of your senses. Most importantly, enjoy the
        spectacular view!
      </p>
      <FeatureAccordion />
    </div>
  )
}
