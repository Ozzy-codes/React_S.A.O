import ClassNames from "classnames"

interface ButtonProp {
  children: React.ReactNode,
  primary?: boolean,
  outline?: boolean,
  rounded?: boolean,
  soft_corners?: boolean,
  [rest:string]: any
  //  NOTE: index signatures => https://dmitripavlutin.com/typescript-index-signatures/#1-why-index-signature
}

const Button: React.FC<ButtonProp> = ({
  children,
  primary,
  outline,
  rounded,
  soft_corners,
  ...rest
}) => {
  const classes = ClassNames(
    "flex justify-center px-3 py-3 border text-white active:decoration-sky-500 active:text-sky-500",
    rest.className,
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
export default Button
