import FeatureAccordion from "../componentsTs/FeatureAccordion"
import Button from "../componentsTs/Button"
import TopImg from "../componentsTs/TopImg"
import GoogleMap from "../componentsTs/GoogleMap"
import WhiteTrimContainer from "../componentsTs/WhiteTrimContainer"
import OutsideView from '../photos/banner/1-web-or-mls-Sage+Oak-1.jpg'
import MasterWindowView from '../photos/gallery/33-web-or-mls-Sage+Oak-33.jpg'
import { Link } from "react-router-dom"
import { useEffect } from "react"

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="flex flex-col">
      <TopImg />
      <main className="flex flex-col ">
        <WhiteTrimContainer lateralNTop>
          <div className="flex flex-col items-center md:h-[600px] md:flex-row md:items-stretch">
            <div className="p-4 flex flex-col justify-evenly">
              <div className="flex flex-col">
                <h2 className="mx-4 mt-4 text-3xl">
                  Luxury Cabin With Breathtaking Views
                </h2>
                <p className="m-4">
                  Welcome to Sage + Oak Cabin, your very own secluded
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
                  primary
                  className="w-full font-bold py-4 text-2xl ">
                  BOOK NOW
                </Button>
              </Link>
            </div>
            <img src={OutsideView} alt="Testing Img" className="w-full md:w-[60%] pt-4 md:pt-0" />
          </div>
        </WhiteTrimContainer>
        <WhiteTrimContainer lateralNTop>
          <div className="flex flex-col-reverse items-center md:h-[600px] md:flex-row md:items-stretch">
            <img src={MasterWindowView} alt="Testing Img" className="w-full object-contain md:w-[60%] pt-4 md:pt-0" />
            <div className="p-4">
              <FeatureAccordion
                className={
                  "md:col-[2_/_3] md:row-[1_/_4] md:overflow-hidden"
                }
              />
            </div>
          </div>
        </WhiteTrimContainer>
      </main>
      <WhiteTrimContainer lateralNTop>
        <GoogleMap />
      </WhiteTrimContainer>
    </div>
  )
}
