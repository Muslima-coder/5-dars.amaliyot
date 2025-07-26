import { NavLink } from "react-router-dom"

const NavItem = ({title, icon, path}) => {
  return (
    <NavLink className={'py-[18px]  relative text-[#DDE2FF] pl-[32px] flex items-center gap-[24px] '} to={path}>
      {icon}
     <span>{title}</span>
      </NavLink>
  )
}

export default NavItem
