import ClassNames from "classnames"

export default function Button({
  children,
  primary,
  outline,
  rounded,
  ...rest
}) {
  const classes = ClassNames("flex items-center px-3 py-1.5 border", {
    "border-blue-500 bg-blue-500 text-white": primary,
    "rounded-full": rounded,
    "bg-white": outline
  })

  return (
    <button
      {...rest}
      className={classes}>
      {children}
    </button>
  )
}
