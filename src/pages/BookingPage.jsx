export default function bookingpage() {
  // const data_widget_id = "afd5ae158721478f8a231d1f1bf4124d"
  // const data_property_id = "ad27789d5c644113b84e38dea08436de"

  const iframe = document.querySelector(".ownerrez-widget-iframe")
  console.log("iframe object", iframe)

  return (
    <div>
      <img
        className="w-full"
        src="https://picsum.photos/200"
        alt="random img"
      />
      <div className="p-4">
        <iframe
          src="https://secure.ownerreservations.com/widgets/afd5ae158721478f8a231d1f1bf4124d?seq=0&amp;propertykey=ad27789d5c644113b84e38dea08436de&amp;referrer=http%3a%2f%2flocalhost%3a3000%2fbooking#http%3a%2f%2flocalhost%3a3000%2fbooking"
          seamless="seamless"
          allowtransparency="true"
          className="ownerrez-widget-iframe"
          title="booking/inquiry widget"
          style={{
            width: "100%",
            border: "0px",
            overflow: "hidden",
            objectFit: "contain",
            height: "518px"
          }}></iframe>{" "}
        <script src="https://secure.ownerreservations.com/widget.js"></script>
      </div>
    </div>
  )
}
{
  /* <iframe src="https://secure.ownerreservations.com/widgets/afd5ae158721478f8a231d1f1bf4124d?seq=0&amp;propertykey=ad27789d5c644113b84e38dea08436de&amp;referrer=http%3a%2f%2flocalhost%3a3000%2fbooking#http%3a%2f%2flocalhost%3a3000%2fbooking" frameborder="0" scrolling="no" seamless="seamless" allowtransparency="true" class="ownerrez-widget-iframe" title="booking/inquiry widget" style="width: 100%; border: 0px; overflow: hidden; height: 518px;"></iframe> */
}
