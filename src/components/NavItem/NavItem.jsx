export const NavItem = ({title, href}) => {
  return (
    <a href={href} style={{color: "white", textDecoration: "none", marginLeft: "2vw", marginRight: "2vw"}}>
      {title}
    </a>
  )
}