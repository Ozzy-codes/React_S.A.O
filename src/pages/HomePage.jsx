// import { useEffect } from "react"
import FeatureAccordion from "../components/FeatureAccordion"
import Button from "../components/Button"

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
    <div className="flex flex-col">
      <img
        className="w-full"
        src="https://picsum.photos/200"
        alt="random img"
      />
      <h2 className="mx-4 mt-4 text-3xl">
        Luxury Cabin With Breath Taking Views
      </h2>
      <h3 className="mx-4 mt-4 text-xl">
        3 Bedrooms &#xB7; 3 Baths &#xB7; Sleeps 5-10
      </h3>
      <p className="m-4">
        Welcome to Sage and Oak Cabin, your very own secluded oasis
        with breathtaking views! This beautiful, custom-built 3000 sq
        foot cabin is nestled atop its own hill in the peaceful side
        of the Smokies, surrounded by the woods, giving you all of the
        privacy you will need for a relaxing retreat.
      </p>
      <Button
        soft_corners
        className="mx-10 text-2xl py-4">
        Book Now
      </Button>
      <FeatureAccordion />
      <p className="m-4">
        Blending rustic and modern elements, you will surely feel that
        you have escaped from your everyday life. Clean and crisp
        sheets, cozy throw blankets, fresh mountain air, a relaxing
        hot tub, and carefully curated decor will stimulate all of
        your senses. Most importantly, enjoy the spectacular view!
      </p>
    </div>
  )
}
