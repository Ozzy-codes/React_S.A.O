export default function CloseButton() {
  const topDivStyle = "fixed right-0 h-6 w-9 -translate-y-full"

  const baseStyle = "w-10 h-2 block bg-gray-500 fixed"
  const rotateTopSpan = " top-0 rotate-[135deg]"
  const rotateBottomSpan = " top-0 -rotate-[135deg]"

  return (
    <button className={topDivStyle}>
      <span className={baseStyle + rotateTopSpan}>&nbsp;</span>
      <span className={baseStyle + rotateBottomSpan}>&nbsp;</span>
    </button>
  )
}
