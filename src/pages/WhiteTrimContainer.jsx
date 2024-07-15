const WhiteTrimContainer = ({ children, lateralNTop, all }) => {

  let styling;
  if (lateralNTop) styling = "px-4 pt-4"
  else if (all) styling = "p-4"

  return (
    <div className={styling}>{children}</div>
  )
}
export default WhiteTrimContainer
