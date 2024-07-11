interface SkeletonProps {
  times: number,
  className: string
}

const Skeleton: React.FC<SkeletonProps> = ({ times, className }) => {
  const outerClassNames = "overflow-hidden bg-gray-200 " + className

  const innerClassNames =
    "animate-shimmer absolute inset-0 -translate-x-full bg-gradient-to-r from-gray-200 via-white to-gray-200 "

  const boxes = Array(times)
    .fill(0)
    .map((_, i) => {
      return (
        <div
          key={i}
          className={outerClassNames}>
          <div className={innerClassNames} />
        </div>
      )
    })
  return <>
  {boxes}
  </>
}

export default Skeleton
