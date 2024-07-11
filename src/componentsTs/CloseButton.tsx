interface CloseButtonProps {
onClose: () => void
}

const CloseButton: React.FC<CloseButtonProps> = ({ onClose }) => {
  const topDivStyle = "fixed right-0 h-6 w-9 -translate-y-full"

  const baseStyle = "w-8 h-1 block bg-gray-300 fixed"
  const rotateTopSpan = " top-0 rotate-[135deg]"
  const rotateBottomSpan = " top-0 -rotate-[135deg]"

  return (
    <button
      onClick={onClose}
      className={topDivStyle}>
      <span className={baseStyle + rotateTopSpan}>&nbsp;</span>
      <span className={baseStyle + rotateBottomSpan}>&nbsp;</span>
    </button>
  )
}
export default CloseButton
