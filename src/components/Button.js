import ClassNames from "classnames"

export default function Button({
  children,
  primary,
  outline,
  rounded,
  ...rest
}) {
  const classes = ClassNames(
    rest.className,
    "flex justify-center px-3 py-3 border bg-green-900 text-white",
    {
      "border-blue-500 bg-blue-500 text-white": primary,
      "rounded-full": rounded,
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
