import { SiFacebook } from "react-icons/si"
import { SiInstagram } from "react-icons/si"

export default function Footer() {
  return (
    <div className="list_spacing text-center my-5 mx-1 text-lg">
      <img
        src="https://uc.orez.io/f/6b76dd8c2b214f1db488cbc33ffd8eff"
        alt="Sage & Oak"
        className="px-20"
      />
      <p>
        &copy; 2023 SAGE + OAK CABIN &#xB7;{" "}
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
  )
}
