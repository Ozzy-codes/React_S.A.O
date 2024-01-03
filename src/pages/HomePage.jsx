import FeatureAccordion from "../components/FeatureAccordion"
import Button from "../components/Button"
import TopImg from "../components/TopImg"
import GoogleMap from "../components/GoogleMap"
import { Link } from "react-router-dom"
import { useEffect } from "react"

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="flex flex-col">
      <TopImg />
      <div className="grid md:grid-cols-2 md:h-[600px] bg-[var(--stone-100)]">
        <div className="flex flex-col">
          <h2 className="mx-4 mt-4 text-3xl">
            Luxury Cabin With Breath Taking Views
          </h2>
          <h3 className="mx-4 mt-4 text-xl">
            3 Bedrooms &#xB7; 3 Baths &#xB7; Sleeps 5-10
          </h3>
          <p className="m-4">
            Welcome to Sage and Oak Cabin, your very own secluded
            oasis with breathtaking views! This beautiful,
            custom-built 3000 sq foot cabin is nestled atop its own
            hill in the peaceful side of the Smokies, surrounded by
            the woods, giving you all of the privacy you will need for
            a relaxing retreat.
          </p>
        </div>
        <Link
          to={"booking"}
          className="mx-4">
          <Button
            soft_corners
            className="w-full text-3xl py-4">
            Book Now
          </Button>
        </Link>
        <p className="m-4">
          Blending rustic and modern elements, you will surely feel
          that you have escaped from your everyday life. Clean and
          crisp sheets, cozy throw blankets, fresh mountain air, a
          relaxing hot tub, and carefully curated decor will stimulate
          all of your senses. Most importantly, enjoy the spectacular
          view!
        </p>
        <FeatureAccordion
          className={
            "md:col-[2_/_3] md:row-[1_/_4] md:overflow-hidden"
          }
        />
      </div>
      <GoogleMap />
    </div>
  )
}
