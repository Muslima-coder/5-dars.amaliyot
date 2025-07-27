import { useLocation } from "react-router-dom"
import { NotificationIcon, SearchIcon } from "../assets/icons"
import { NigoraBro } from "../assets/image"


const Header = () => {
  const {pathname} = useLocation()
  console.log(pathname.split("/")[1])

  return (
    <div className="capitalize p-[30px] flex items-center justify-between">
      <p className="font-bold text-[24px] text-[#252733] ">{pathname == "/" ? "Overwiew" : pathname.split("/")[1]}</p>
      <div className="flex items-center gap-[30px]"> 
        <div className="flex items-center gap-[24px]">
        <button><SearchIcon/></button>
        <button><NotificationIcon/></button>
        </div>
        <span className="h-[32px] border-[1px] border-[#DFE0EB]"></span>
        <p className="font-semibold text-[14px] leading-[20px] text-[#252733] ">Jones Ferdinand</p>
        <img src={<NigoraBro/>} alt="img" width={100} height={100}/>
      </div>
    </div>
  )
}

export default Header