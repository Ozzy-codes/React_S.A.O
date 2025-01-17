interface HamburgerMenuProps {
  isActive: boolean,
  menuColor: string
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isActive, menuColor }) => {
  const baseStyle = "w-10 h-1 md:h-1.5 md:w-16 block "
  const hideSpan = isActive ? "bg-transparent" : "bg-" + menuColor
  const rotateTopSpan = isActive
    ? "top-0 rotate-[135deg]"
    : "-top-[.75rem] md:-top-[1rem]"
  const rotateBottomSpan = isActive
    ? "top-0 -rotate-[135deg]"
    : "top-[.75rem] md:top-[1rem]"

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
export default HamburgerMenu
