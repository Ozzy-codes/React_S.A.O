import SingleMonthView from "./SingleMonthView"
import ThreeMonthView from "./ThreeMonthView"
import useResize from "../hooksTs/use-Resize"

interface CabinAvailabilityProps {
  className?: string
}

const CabinAvailability: React.FC<CabinAvailabilityProps> = ({ className }) => {
  const { nextViewPort } = useResize(768)

  const widgetOption = nextViewPort ? (
    <ThreeMonthView className={className} />
  ) : (
    <SingleMonthView className={className} />
  )

  return <>{widgetOption}</>
}

export default CabinAvailability
