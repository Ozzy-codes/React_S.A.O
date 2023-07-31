import { useState } from "react"
import { GoChevronDown, GoChevronLeft } from "react-icons/go"
import { items } from "../seeds/AccordionData"

function FeatureAccordion() {
  const [expandedIndex, setExpandedIndex] = useState(-1)

  const handleClick = (nextIndex) => {
    setExpandedIndex((currentExpandedIndex) => {
      if (currentExpandedIndex === nextIndex) {
        return -1
      } else {
        return nextIndex
      }
    })

    if (expandedIndex === nextIndex) {
      setExpandedIndex(-1)
    } else {
      setExpandedIndex(nextIndex)
    }
  }

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex
    const content = isExpanded && (
      <div className="border-b p-5 list_spacing">
        {item.content.map((subSection) => (
          <div key={subSection.title}>
            <b>{subSection.title}:</b> {subSection.description}
          </div>
        ))}
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
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleClick(index)}>
          {item.label}
          {icon}
        </div>
        {content}
      </div>
    )
  })

  return <div className="border-x border-t rounded">{renderedItems}</div>
}
export default FeatureAccordion
