import SingleMonthView from "./SingleMonthView"
import ThreeMonthView from "./ThreeMonthView"
import useResize from "../hooks/use-Resize"

function CabinAvailability({ className }) {
  const { nextViewPort } = useResize(768)

  const widgetOption = nextViewPort ? (
    <ThreeMonthView className={className} />
  ) : (
    <SingleMonthView className={className} />
  )

  return <>{widgetOption}</>
}
export default CabinAvailability
