export default function HamburgerMenu({ handleClick, menuColor }) {
  const baseStyle = "w-10 h-1 block "
  const hideSpan = handleClick ? "bg-transparent" : "bg-" + menuColor
  const rotateTopSpan = handleClick
    ? "top-0 rotate-[135deg]"
    : "-top-[.75rem]"
  const rotateBottomSpan = handleClick
    ? "top-0 -rotate-[135deg]"
    : "top-[.75rem]"

  return (
    <div className="flex flex-col justify-center items-center relative">
      <span
        className={
          baseStyle +
          "bg-" +
          menuColor +
          " absolute transition duration-200 " +
          rotateTopSpan
        }>
        &nbsp;
      </span>
      <span className={baseStyle + "relative " + hideSpan}>
        &nbsp;
      </span>
      <span
        className={
          baseStyle +
          "bg-" +
          menuColor +
          " absolute transition duration-200 " +
          rotateBottomSpan
        }>
        &nbsp;
      </span>
    </div>
  )
}
