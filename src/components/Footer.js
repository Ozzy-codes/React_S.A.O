import { SiFacebook } from "react-icons/si"
import { SiInstagram } from "react-icons/si"
import logo from '../photos/logo/sage_and_oak_logo.png'

export default function Footer() {
  return (
    <footer className="grid md:grid-cols-2 md:px-[5rem] text-center py-5 px-1 text-lg bg-[var(--logo-color)]">
      <img
        src={logo}
        alt="Sage & Oak"
        className="w-[50vw] justify-self-center md:w-[20vw] md:row-[1_/_5] rounded-[var(--border-radius)] "
      />
      {
      }
      <div className="flex flex-col list_spacing mt-12">
        <p>&copy; 2023 SAGE + OAK CABIN</p>
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
            SAGEANDOAKCABIN@GMAIL.COM
          </a>
        </p>
        <p>
          <a href="https://www.facebook.com/sageandoakcabin">
            <SiFacebook className="inline-block text-3xl mx-3" />
          </a>{" "}
          &#xB7;{" "}
          <a href="https://www.instagram.com/sageandoakcabin/">
            <SiInstagram className="inline-block text-3xl mx-3" />
          </a>
        </p>
      </div>
    </footer>
  )
}
