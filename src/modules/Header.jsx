import { useLocation } from "react-router-dom"
import { NotificationIcon, SearchIcon } from "../assets/icons"
import { UsersLogo } from "../assets/images"

const Header = () => {
  const { pathname } = useLocation()
  const currentPath = pathname === "/" ? "overview" : pathname.split("/")[1]

  return (
    <div className="capitalize p-[30px] relative flex items-center justify-between">
      
      <div className={`${currentPath !== "overview" ? "absolute right-230" : ""}`}>
        <p className="font-bold text-[24px] text-[#252733]">
          {currentPath}
        </p>
      </div>

      <div className="flex items-center gap-[30px]"> 
        <div className="flex items-center gap-[24px]">
          <button><SearchIcon /></button>
          <button><NotificationIcon /></button>
        </div>
        <span className="h-[32px] border-[1px] border-[#DFE0EB]"></span>
        <p className="font-semibold text-[14px] leading-[20px] text-[#252733]">Jones Ferdinand</p>
        <img src={UsersLogo} alt="User" />
      </div>
    </div>
  )
}

export default Header
