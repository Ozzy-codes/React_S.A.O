import FeatureAccordion from "../components/FeatureAccordion"
import Button from "../components/Button"
import useTopImgLoader from "../hooks/use-TopImgLoader"
import useWidgetLoader from "../hooks/use-WidgetLoader"
import { Link } from "react-router-dom"
import { useEffect } from "react"

export default function HomePage() {
  const { isLoaded, setLoadTrue, loadingContent } = useTopImgLoader()
  const { widgetLoaded, setWidgetLoadTrue, widgetLoadingContent } =
    useWidgetLoader()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="flex flex-col">
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
      <Link
        to={"booking"}
        className="mx-4">
        <Button
          soft_corners
          className="w-full text-3xl py-4">
          Book Now
        </Button>
      </Link>
      <FeatureAccordion />
      <p className="m-4">
        Blending rustic and modern elements, you will surely feel that
        you have escaped from your everyday life. Clean and crisp
        sheets, cozy throw blankets, fresh mountain air, a relaxing
        hot tub, and carefully curated decor will stimulate all of
        your senses. Most importantly, enjoy the spectacular view!
      </p>
      <h2 className="text-3xl m-4">Map</h2>
      <div className="p-4 bg-white">
        <div
          className={
            "relative " + (widgetLoaded ? "" : "h-[90vh] w-full")
          }>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.274167456993!2d-83.6046403246361!3d35.74406547256694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885eab89d3aaece9%3A0xc272ce6478e3f4dc!2sSage%20%2B%20Oak%20Cabin!5e0!3m2!1sen!2sid!4v1694040788912!5m2!1sen!2sid"
            title="map"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            className="w-full"
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={setWidgetLoadTrue}></iframe>
          {widgetLoadingContent}
        </div>
      </div>
    </div>
  )
}
