import ClassNames from "classnames"

export default function Button({
  children,
  primary,
  outline,
  rounded,
  soft_corners,
  ...rest
}) {
  const classes = ClassNames(
    rest.className,
    "flex justify-center px-3 py-3 border bg-green-900 text-white active:decoration-sky-500 active:text-sky-500",
    {
      "border-blue-500 bg-blue-500 text-white": primary,
      "rounded-full": rounded,
      "rounded-lg": soft_corners,
      "bg-white": outline
    }
  )

  return (
    <button
      {...rest}
      className={classes}>
      {children}
    </button>
  )
}
