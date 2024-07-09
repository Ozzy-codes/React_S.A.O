import { SiFacebook } from "react-icons/si"
import { SiInstagram } from "react-icons/si"
import logo from '../photos/logo/sage_and_oak_logo.png'

export default function Footer() {
  return (
    <footer className="flex flex-col justify-around items-center md:flex-row md:px-[5rem] text-center py-5 px-1 text-lg bg-[var(--logo-color)] text-white">
      <img
        src={logo}
        alt="Sage & Oak"
        className="w-[50vw] justify-self-center md:w-[20vw] rounded-[var(--border-radius)] "
      />
      {
      }
      <div className="flex flex-col list_spacing mt-12">
        <p>&copy; 2024 SAGE+OAK CABIN</p>
        <p>
          <a
            href="tel:+18654846066"
            className="underline">
            865-484-6066
          </a>
        </p>
        <p>
          <a
            href="mailto:sageandoakcabin@gmail.com"
            className="underline">
            sageandoakcabin@gmail.com
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
  )
}
