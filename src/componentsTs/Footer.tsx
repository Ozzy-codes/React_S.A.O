import WhiteTrimContainer from "./WhiteTrimContainer"
import { SiFacebook } from "react-icons/si"
import { SiInstagram } from "react-icons/si"
import logo from '../photos/logo/sage_and_oak_logo.png'

const Footer = () => {
  return (
    <WhiteTrimContainer all>
      <footer className="flex flex-col md:flex-row justify-center items-center pb-2 md:py-0 md:px-[5rem] text-center text-xl bg-[var(--logo-color)] text-white">
        <img
          src={logo}
          alt="Sage & Oak"
          className="w-[50vw] justify-self-center md:w-[20vw] rounded-[var(--border-radius)] "
        />
        {
        }
        <div className="flex flex-col list_spacing ">
          <p>
            <a
              href="mailto:sageandoakcabin@gmail.com"
              className="underline">
              sageandoakcabin@gmail.com
            </a>
          </p>
          <p>
            <a
              href="tel:+18654846066"
              className="underline">
              865-484-6066
            </a>
          </p>
          <p>
            <a href="https://www.facebook.com/sageandoakcabin" aria-label="Vist our facebook page">
              <SiFacebook className="inline-block text-3xl mx-3" />
            </a>{" "}
            &#xB7;{" "}
            <a href="https://www.instagram.com/sageandoakcabin/" aria-label="Visit our instagram page">
              <SiInstagram className="inline-block text-3xl mx-3" />
            </a>
          </p>
        </div>
      </footer>
    </WhiteTrimContainer>
  )
}
export default Footer
