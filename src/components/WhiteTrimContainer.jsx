const WhiteTrimContainer = ({ children, lateralNTop, all }) => {

  let styling;
  if (lateralNTop) styling = "px-2 pt-4 md:px-4"
  else if (all) styling = "py-4 px-2 md:p-4"

  return (
    <div className={styling}>{children}</div>
  )
}
export default WhiteTrimContainer