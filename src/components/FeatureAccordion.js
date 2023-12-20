import { useState, useRef } from "react"
import { GoChevronDown, GoChevronLeft } from "react-icons/go"
import { items } from "../seeds/AccordionData"

function FeatureAccordion({ className }) {
  const [expandedIndex, setExpandedIndex] = useState(0)
  const subjectRef = useRef([])

  const handleClick = (nextIndex) => {
    if (expandedIndex !== nextIndex) {
      setExpandedIndex(nextIndex)
    }
  }

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex
    const refDrawer = subjectRef.current[index]

    if (isExpanded && refDrawer) {
      refDrawer.nextSibling.style.maxHeight =
        refDrawer.nextSibling.scrollHeight + "px"
    } else if (refDrawer) {
      refDrawer.nextSibling.style.maxHeight = "0px"
    }

    const content = (
      <div
        style={{ maxHeight: "0px" }}
        className="border-b px-5 overflow-hidden md:h-[425px] md:overflow-y-scroll">
        <div className="my-5 list_spacing">
          {item.content.map((subSection) => (
            <div key={subSection.title}>
              <b>{subSection.title}:</b> {subSection.description}
            </div>
          ))}
        </div>
      </div>
    )

    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    )

    return (
      <div key={item.id}>
        <div
          ref={(element) => (subjectRef.current[index] = element)}
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleClick(index)}>
          {item.label}
          {icon}
        </div>
        {content}
      </div>
    )
  })

  return (
    <div className={"border-x border-t rounded mt-6 " + className}>
      {renderedItems}
    </div>
  )
}
export default FeatureAccordion
