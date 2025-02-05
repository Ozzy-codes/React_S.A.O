import { useState, useRef, useEffect } from "react"
import { GoChevronDown, GoChevronLeft } from "react-icons/go"
import { items } from "../seeds/AccordionData"

function FeatureAccordion({ className }) {
  const [expandedIndex, setExpandedIndex] = useState(-1)
  const subjectRef = useRef([])

  const handleClick = (nextIndex) => {
    if (expandedIndex !== nextIndex) {
      setExpandedIndex(nextIndex)
    } else if (expandedIndex === nextIndex) {
      setExpandedIndex(-1)
    }
  }

  useEffect(() => {
    setExpandedIndex(0)
  }, [])

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex
    const refDrawer = subjectRef.current[index]

    if (isExpanded && refDrawer) {
      refDrawer.nextSibling.style.maxHeight =
        refDrawer.nextSibling.scrollHeight + "px"
    } else if (refDrawer) {
      refDrawer.nextSibling.style.maxHeight = "0px"
    }

    let list
    if (item.bulletPointList === true) {
      list = item.content.map((subSection) => (
        <div key={subSection.title}>
          <b>{subSection.title}:</b>
          <ul className="flex flex-wrap list-disc">
            {
              subSection.description.map((item, idx) => (
                <li className="mr-6" key={idx}>{
                  item
                }</li>
              ))
            }
          </ul>
        </div>
      ))
    } else {
      list = item.content.map((subSection) => (
        <div key={subSection.title}>
          <b>{subSection.title}:</b> {subSection.description}
        </div>
      ))
    }

    const content = (
      <div
        style={{ maxHeight: "0px" }}
        className="border-b px-5 overflow-hidden h-[350px] md:h-[425px] overflow-y-scroll">
        <div className="my-5 list_spacing">
          {list}
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
          className="flex justify-between rounded-[var(--border-radius)] p-3 bg-[var(--logo-color)] text-white text-2xl font-bold border-b items-center cursor-pointer"
          onClick={() => handleClick(index)}>
          {item.label.toUpperCase()}
          {icon}
        </div>
        {content}
      </div>
    )
  })

  return (
    <div className={"border-x border-t " + className}>
      {renderedItems}
    </div>
  )
}
export default FeatureAccordion
